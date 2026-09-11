import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Link,
  useSearchParams,
} from 'react-router-dom';

import {
  CheckCircle2,
  LoaderCircle,
  MailCheck,
  XCircle,
} from 'lucide-react';

import authApi from '../../features/auth/auth.api.js';

const VerifyEmail = () => {
  const [
    searchParams,
  ] =
    useSearchParams();

  const token =
    searchParams.get(
      'token'
    );

  const requestStarted =
    useRef(false);

  const [
    status,
    setStatus,
  ] =
    useState(
      'loading'
    );

  const [
    message,
    setMessage,
  ] =
    useState(
      'E-posta adresiniz doğrulanıyor...'
    );

  useEffect(
    () => {
      if (
        requestStarted.current
      ) {
        return;
      }

      requestStarted.current =
        true;

      if (
        !token
      ) {
        setStatus(
          'error'
        );

        setMessage(
          'Doğrulama bağlantısı geçersiz veya eksik.'
        );

        return;
      }

      const verify =
        async () => {
          try {
            await authApi.verifyEmail(
              token
            );

            setStatus(
              'success'
            );

            setMessage(
              'E-posta adresiniz başarıyla doğrulandı. Artık hesabınıza giriş yapabilirsiniz.'
            );
          } catch (
            error
          ) {
            const rawMessage =
              String(
                error?.response
                  ?.data?.message ||
                error?.message ||
                ''
              ).trim();

            setStatus(
              'error'
            );

            if (
              /süresi dolmuş/i.test(
                rawMessage
              )
            ) {
              setMessage(
                'Bu doğrulama bağlantısının süresi dolmuş. Giriş ekranından yeni bir doğrulama bağlantısı isteyebilirsiniz.'
              );
            } else if (
              /daha önce kullanılmış/i.test(
                rawMessage
              )
            ) {
              setMessage(
                'Bu doğrulama bağlantısı daha önce kullanılmış veya artık geçerli değil.'
              );
            } else if (
              /geçersiz/i.test(
                rawMessage
              )
            ) {
              setMessage(
                'Doğrulama bağlantısı geçersiz veya artık kullanılamıyor.'
              );
            } else {
              setMessage(
                'E-posta doğrulama işlemi tamamlanamadı. Lütfen bağlantıyı kontrol edip tekrar deneyin.'
              );
            }
          }
        };

      verify();
    },
    [
      token,
    ]
  );

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="mb-7">
          <img
            src="/derkenar-logo.png"
            alt="Derkenar"
            className="
              h-auto
              w-full
              max-w-[300px]
              object-contain
              object-left
            "
          />
        </div>

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-blue-600
            dark:text-blue-400
          "
        >
          Hesap Doğrulama
        </p>

        <h2
          className="
            mt-2
            text-2xl
            font-semibold
            tracking-[-0.035em]
            text-gray-900
            dark:text-white
            sm:text-[28px]
          "
        >
          E-posta doğrulama
        </h2>
      </div>

      <div
        className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-6
          text-center
          shadow-sm
          dark:border-white/[0.08]
          dark:bg-white/[0.035]
        "
      >
        <div
          className="
            mx-auto
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-gray-50
            dark:bg-white/[0.05]
          "
        >
          {status ===
            'loading' && (
            <LoaderCircle
              className="h-6 w-6 animate-spin text-blue-600 dark:text-blue-400"
            />
          )}

          {status ===
            'success' && (
            <CheckCircle2
              className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
            />
          )}

          {status ===
            'error' && (
            <XCircle
              className="h-6 w-6 text-red-600 dark:text-red-400"
            />
          )}
        </div>

        <p
          className="
            text-sm
            leading-6
            text-gray-600
            dark:text-slate-300
          "
        >
          {message}
        </p>

        {status ===
          'success' && (
          <Link
            to="/login"
            className="
              mt-6
              inline-flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-blue-600
              px-4
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/30
            "
          >
            <MailCheck className="h-4 w-4" />
            Giriş Yap
          </Link>
        )}

        {status ===
          'error' && (
          <Link
            to="/login"
            className="
              mt-6
              inline-flex
              text-sm
              font-semibold
              text-blue-600
              hover:text-blue-700
              dark:text-blue-400
              dark:hover:text-blue-300
            "
          >
            Giriş ekranına dön
          </Link>
        )}
      </div>

      <div
        className="
          mt-8
          border-t
          border-gray-200
          pt-6
          dark:border-white/[0.07]
        "
      >
        <p
          className="
            text-center
            text-xs
            leading-5
            text-gray-500
            dark:text-slate-500
          "
        >
          Derkenar güvenli hesap doğrulama sistemi
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
