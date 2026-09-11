import axios from '../../app/config/axios.js';

const authApi = {
  register: (
    data
  ) => {
    return axios.post(
      '/auth/register',
      data
    );
  },

  verifyEmail: (
    token
  ) => {
    return axios.post(
      '/auth/verify-email',
      {
        token,
      }
    );
  },

  resendVerification: (
    email
  ) => {
    return axios.post(
      '/auth/resend-verification',
      {
        email,
      }
    );
  },

  login: (
    email,
    password
  ) => {
    return axios.post(
      '/auth/login',
      {
        email,
        password,
      },
      {
        withCredentials:
          true,
      }
    );
  },

  refreshToken: () => {
    return axios.post(
      '/auth/refresh-token',
      null,
      {
        withCredentials:
          true,
      }
    );
  },

  logout: () => {
    return axios.post(
      '/auth/logout',
      null,
      {
        withCredentials:
          true,
      }
    );
  },

  getProfile: () => {
    return axios.get(
      '/auth/profile'
    );
  },

  updateProfile: (
    data
  ) => {
    return axios.patch(
      '/auth/profile',
      data
    );
  },

  changePassword: (
    data
  ) => {
    return axios.put(
      '/auth/change-password',
      data
    );
  },

  forgotPassword: (
    email
  ) => {
    return axios.post(
      '/auth/forgot-password',
      {
        email,
      }
    );
  },

  resetPassword: (
    token,
    password
  ) => {
    return axios.post(
      '/auth/reset-password',
      {
        token,
        password,
      }
    );
  },
};

export default authApi;
