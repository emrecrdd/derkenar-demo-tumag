import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';

import authApi from './auth.api.js';

import {
  useAuth,
} from '../../app/providers/auth.provider.jsx';

import toast from 'react-hot-toast';

const getRawErrorMessage = (
  error
) => {
  return String(
    error?.response?.data?.message ||
      error?.message ||
      ''
  ).trim();
};

const isTechnicalMessage = (
  message
) => {
  return /sequelize|constraint|database|sql|stack|syntaxerror|typeerror|referenceerror|axios|request failed|status code|postgres|column|relation|uuid/i.test(
    String(
      message || ''
    )
  );
};

const isNetworkError = (
  error
) => {
  const message =
    getRawErrorMessage(
      error
    );

  return (
    !error?.response ||
    /network error|failed to fetch|timeout|econnrefused|enotfound/i.test(
      message
    )
  );
};

const getLoginErrorMessage = (
  error
) => {
  const status =
    error?.response?.status;

  const rawMessage =
    getRawErrorMessage(
      error
    );

  if (
    /e-posta.*doğrula|doğrulamanız gerekmektedir|e-posta adresinizi doğrulay/i.test(
      rawMessage
    )
  ) {
    return 'Giriş yapmadan önce e-posta adresinizi doğrulamanız gerekmektedir.';
  }

  if (
    status === 401 ||
    /e-posta veya şifre hatalı/i.test(
      rawMessage
    )
  ) {
    return 'E-posta veya şifre hatalı';
  }

  if (
    /kullanıcı hesabı aktif değil|hesabınız pasif durumda/i.test(
      rawMessage
    )
  ) {
    return 'Kullanıcı hesabınız aktif değil. Büro yöneticinizle iletişime geçin.';
  }

  if (
    status === 429
  ) {
    return 'Çok fazla giriş denemesi yapıldı. Lütfen biraz sonra tekrar deneyin.';
  }

  if (
    isNetworkError(
      error
    )
  ) {
    return 'Sunucuya bağlanılamadı. İnternet bağlantınızı kontrol edip tekrar deneyin.';
  }

  if (
    status >= 500 ||
    isTechnicalMessage(
      rawMessage
    )
  ) {
    return 'Giriş işlemi şu anda tamamlanamıyor. Lütfen tekrar deneyin.';
  }

  if (
    rawMessage &&
    /[çğıöşüÇĞİÖŞÜ]|geçersiz|süresi|oturum|hesap|şifre|e-posta|yetki/i.test(
      rawMessage
    )
  ) {
    return rawMessage;
  }

  return 'Giriş işlemi tamamlanamadı. Lütfen tekrar deneyin.';
};

const getRegisterErrorMessage = (
  error
) => {
  const status =
    error?.response?.status;

  const rawMessage =
    getRawErrorMessage(
      error
    );

  if (
    /bu e-posta adresi ile kayıtlı|e-posta.*kayıtlı/i.test(
      rawMessage
    )
  ) {
    return 'Bu e-posta adresi ile kayıtlı bir kullanıcı bulunmaktadır.';
  }

  if (
    /en az 12 karakter/i.test(
      rawMessage
    )
  ) {
    return 'Şifre en az 12 karakter olmalıdır.';
  }

  if (
    /baro|sicil|ad|soyad|zorunlu|geçerli bir e-posta/i.test(
      rawMessage
    ) &&
    !isTechnicalMessage(
      rawMessage
    )
  ) {
    return rawMessage;
  }

  if (
    status === 429
  ) {
    return 'Kısa sürede çok fazla kayıt isteği yapıldı. Lütfen biraz sonra tekrar deneyin.';
  }

  if (
    isNetworkError(
      error
    )
  ) {
    return 'Sunucuya bağlanılamadı. İnternet bağlantınızı kontrol edip tekrar deneyin.';
  }

  if (
    status >= 500 ||
    isTechnicalMessage(
      rawMessage
    )
  ) {
    return 'Kayıt işlemi şu anda tamamlanamıyor. Lütfen tekrar deneyin.';
  }

  if (
    rawMessage
  ) {
    return rawMessage;
  }

  return 'Kayıt işlemi tamamlanamadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.';
};

const getPasswordChangeErrorMessage = (
  error
) => {
  const status =
    error?.response?.status;

  const rawMessage =
    getRawErrorMessage(
      error
    );

  if (
    /mevcut şifre yanlış/i.test(
      rawMessage
    )
  ) {
    return 'Mevcut şifreniz yanlış.';
  }

  if (
    /en az 12 karakter/i.test(
      rawMessage
    )
  ) {
    return 'Yeni şifre en az 12 karakter olmalıdır.';
  }

  if (
    /aynı olamaz/i.test(
      rawMessage
    )
  ) {
    return 'Yeni şifre mevcut şifrenizle aynı olamaz.';
  }

  if (
    status === 429
  ) {
    return 'Kısa sürede çok fazla istek yapıldı. Lütfen biraz sonra tekrar deneyin.';
  }

  if (
    isNetworkError(
      error
    )
  ) {
    return 'Sunucuya bağlanılamadı. İnternet bağlantınızı kontrol edip tekrar deneyin.';
  }

  if (
    status >= 500 ||
    isTechnicalMessage(
      rawMessage
    )
  ) {
    return 'Şifre şu anda değiştirilemiyor. Lütfen tekrar deneyin.';
  }

  if (
    rawMessage &&
    /[çğıöşüÇĞİÖŞÜ]|şifre|geçersiz|zorunlu|oturum/i.test(
      rawMessage
    )
  ) {
    return rawMessage;
  }

  return 'Şifre değiştirilemedi. Lütfen bilgilerinizi kontrol edip tekrar deneyin.';
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (
      data
    ) =>
      authApi.register(
        data
      ),

    onSuccess: () => {
      toast.success(
        'Kaydınız oluşturuldu. E-posta adresinize gönderilen doğrulama bağlantısını kullanın.'
      );
    },

    onError: (
      error
    ) => {
      toast.error(
        getRegisterErrorMessage(
          error
        )
      );
    },
  });
};

export const useResendVerification = () => {
  return useMutation({
    mutationFn: (
      email
    ) =>
      authApi.resendVerification(
        email
      ),

    onSuccess: () => {
      toast.success(
        'Eğer hesabınız doğrulanmayı bekliyorsa yeni doğrulama bağlantısı e-posta adresinize gönderildi.'
      );
    },

    onError: (
      error
    ) => {
      if (
        isNetworkError(
          error
        )
      ) {
        toast.error(
          'Sunucuya bağlanılamadı. İnternet bağlantınızı kontrol edip tekrar deneyin.'
        );
        return;
      }

      toast.error(
        'Doğrulama e-postası şu anda gönderilemiyor. Lütfen tekrar deneyin.'
      );
    },
  });
};

export const useLogin = () => {
  const {
    login,
  } =
    useAuth();

  return useMutation({
    mutationFn: ({
      email,
      password,
    }) =>
      login(
        email,
        password
      ),

    onError: (
      error
    ) => {
      toast.error(
        getLoginErrorMessage(
          error
        )
      );
    },
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: [
      'profile',
    ],
    queryFn: () =>
      authApi.getProfile(),
    staleTime:
      5 * 60 * 1000,
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (
      data
    ) =>
      authApi.changePassword(
        data
      ),

    onSuccess: () => {
      toast.success(
        'Şifreniz başarıyla değiştirildi.'
      );
    },

    onError: (
      error
    ) => {
      toast.error(
        getPasswordChangeErrorMessage(
          error
        )
      );
    },
  });
};
