import crypto from 'crypto';

import {
  Op,
} from 'sequelize';

import {
  User,
} from '../../models/User.js';

// ======================================================
// SAFE ATTRIBUTES
// ======================================================

const SAFE_USER_EXCLUDES = [
  'password',
  'refresh_token',
  'email_verification_token',
  'email_verification_expires',
  'password_reset_token',
  'password_reset_expires',
];

// ======================================================
// HELPERS
// ======================================================

const normalizeEmail = (
  email
) => {
  return String(
    email || ''
  )
    .trim()
    .toLowerCase();
};

// ======================================================
// TOKEN HASH
// ======================================================

const hashToken = (
  token
) => {
  if (
    !token
  ) {
    return null;
  }

  return crypto
    .createHash(
      'sha256'
    )
    .update(
      String(
        token
      ),
      'utf8'
    )
    .digest(
      'hex'
    );
};

const getTokenCandidates = (
  token
) => {
  if (
    !token
  ) {
    return [];
  }

  const rawToken =
    String(
      token
    );

  const hashedToken =
    hashToken(
      rawToken
    );

  return [
    rawToken,
    hashedToken,
  ];
};

// ======================================================
// REPOSITORY
// ======================================================

export const authRepository = {
  findByEmail: (
    email
  ) => {
    const normalizedEmail =
      normalizeEmail(
        email
      );

    return User.findOne({
      where: {
        email:
          normalizedEmail,
      },
    });
  },

  findById: (
    id
  ) => {
    return User.findByPk(
      id,
      {
        attributes: {
          exclude:
            SAFE_USER_EXCLUDES,
        },
      }
    );
  },

  findByIdWithPassword: (
    id
  ) => {
    return User.findByPk(
      id
    );
  },

  create: (
    userData
  ) => {
    return User.create(
      userData
    );
  },

  // ====================================================
  // EMAIL VERIFICATION TOKEN
  // ====================================================

  saveEmailVerificationToken: (
    userId,
    token,
    expires
  ) => {
    const tokenHash =
      token
        ? hashToken(
            token
          )
        : null;

    return User.update(
      {
        email_verification_token:
          tokenHash,

        email_verification_expires:
          expires || null,
      },
      {
        where: {
          id:
            userId,
        },
      }
    );
  },

  findByEmailVerificationToken: (
    token
  ) => {
    if (
      !token
    ) {
      return null;
    }

    const candidates =
      getTokenCandidates(
        token
      );

    return User.findOne({
      where: {
        email_verification_token: {
          [Op.in]:
            candidates,
        },
      },
    });
  },

  markEmailVerified: (
    userId
  ) => {
    return User.update(
      {
        email_verified:
          true,

        email_verification_token:
          null,

        email_verification_expires:
          null,
      },
      {
        where: {
          id:
            userId,
        },
      }
    );
  },

  clearEmailVerificationToken: (
    userId
  ) => {
    return User.update(
      {
        email_verification_token:
          null,

        email_verification_expires:
          null,
      },
      {
        where: {
          id:
            userId,
        },
      }
    );
  },

  // ====================================================
  // REFRESH TOKEN
  // ====================================================

  updateRefreshToken: (
    userId,
    refreshToken
  ) => {
    const refreshTokenHash =
      refreshToken
        ? hashToken(
            refreshToken
          )
        : null;

    return User.update(
      {
        refresh_token:
          refreshTokenHash,
      },
      {
        where: {
          id:
            userId,
        },
      }
    );
  },

  findByRefreshToken: (
    refreshToken
  ) => {
    if (
      !refreshToken
    ) {
      return null;
    }

    const candidates =
      getTokenCandidates(
        refreshToken
      );

    return User.findOne({
      where: {
        refresh_token: {
          [Op.in]:
            candidates,
        },
      },
    });
  },

  invalidateRefreshToken: (
    refreshToken
  ) => {
    if (
      !refreshToken
    ) {
      return null;
    }

    const candidates =
      getTokenCandidates(
        refreshToken
      );

    return User.update(
      {
        refresh_token:
          null,
      },
      {
        where: {
          refresh_token: {
            [Op.in]:
              candidates,
          },
        },
      }
    );
  },

  invalidateAllRefreshTokens: (
    userId
  ) => {
    return User.update(
      {
        refresh_token:
          null,
      },
      {
        where: {
          id:
            userId,
        },
      }
    );
  },

  rotateRefreshToken: async (
    userId,
    currentRefreshToken,
    newRefreshToken
  ) => {
    if (
      !userId ||
      !currentRefreshToken ||
      !newRefreshToken
    ) {
      return false;
    }

    const currentCandidates =
      getTokenCandidates(
        currentRefreshToken
      );

    const newRefreshTokenHash =
      hashToken(
        newRefreshToken
      );

    const [
      affectedRows,
    ] =
      await User.update(
        {
          refresh_token:
            newRefreshTokenHash,
        },
        {
          where: {
            id:
              userId,

            refresh_token: {
              [Op.in]:
                currentCandidates,
            },
          },
        }
      );

    return (
      affectedRows ===
      1
    );
  },

  // ====================================================
  // PASSWORD RESET
  // ====================================================

  savePasswordResetToken: (
    userId,
    token,
    expires
  ) => {
    const tokenHash =
      token
        ? hashToken(
            token
          )
        : null;

    return User.update(
      {
        password_reset_token:
          tokenHash,

        password_reset_expires:
          expires,
      },
      {
        where: {
          id:
            userId,
        },
      }
    );
  },

  findByPasswordResetToken: (
    token
  ) => {
    if (
      !token
    ) {
      return null;
    }

    const candidates =
      getTokenCandidates(
        token
      );

    return User.findOne({
      where: {
        password_reset_token: {
          [Op.in]:
            candidates,
        },
      },
    });
  },

  clearPasswordResetToken: (
    userId
  ) => {
    return User.update(
      {
        password_reset_token:
          null,

        password_reset_expires:
          null,
      },
      {
        where: {
          id:
            userId,
        },
      }
    );
  },
};

export default authRepository;
