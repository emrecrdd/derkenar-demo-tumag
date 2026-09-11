import {
  useRef,
  useState,
} from 'react';

import {
  Link,
  useNavigate,
} from 'react-router-dom';

import {
  BadgeCheck,
  Building2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react';

import Button from '../../components/ui/Button.jsx';

import {
  useRegister,
} from '../../features/auth/auth.hook.js';

const Register = () => {
  const navigate =
    useNavigate();

  const register =
    useRegister();

  const refs =
    useRef({});

  const [
    showPassword,
    setShowPassword,
  ] =
    useState(false);

  const [
    formData,
    setFormData,
  ] =
    useState({
      first_name: '',
      last_name: '',
      email: '',
      bar_association: '',
      bar_registration_number: '',
      password: '',
    });

  const [
    errors,
    setErrors,
  ] =
    useState({});

  const handleChange = (
    event
  ) => {
    const {
      name,
      value,
    } =
      event.target;

    setFormData(
      (
        current
      ) => ({
        ...current,
        [name]:
          value,
      })
    );

    if (
      errors[name]
    ) {
      setErrors(
        (
          current
        ) => ({
          ...current,
          [name]:
            '',
        })
      );
    }
  };

  const focusFirstInvalidField = (
    nextErrors
  ) => {
    const first =
      Object.keys(
        nextErrors
      )[0];

    window.requestAnimationFrame(
      () => {
        refs.current[
          first
        ]?.focus?.();
      }
    );
  };

  const validateForm =
    () => {
      const nextErrors =
        {};

      const email =
        formData.email
          .trim()
          .toLowerCase();

      if (
        !formData.first_name.trim()
      ) {
        nextErrors.first_name =
          'Ad gereklidir';
      }

      if (
        !formData.last_name.trim()
      ) {
        nextErrors.last_name =
          'Soyad gereklidir';
      }

      if (!email) {
        nextErrors.email =
          'E-posta adresi gereklidir';
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          email
        )
      ) {
        nextErrors.email =
          'Geçerli bir e-posta adresi girin';
      }

      if (
        !formData.bar_association.trim()
      ) {
        nextErrors.bar_association =
          'Baro gereklidir';
      }

      if (
        !formData.bar_registration_number.trim()
      ) {
        nextErrors.bar_registration_number =
          'Baro sicil numarası gereklidir';
      }

      if (
        !formData.password
      ) {
        nextErrors.password =
          'Şifre gereklidir';
      } else if (
        formData.password.length <
        12
      ) {
        nextErrors.password =
          'Şifre en az 12 karakter olmalıdır';
      }

      setErrors(
        nextErrors
      );

      if (
        Object.keys(
          nextErrors
        ).length >
        0
      ) {
        focusFirstInvalidField(
          nextErrors
        );
      }

      return (
        Object.keys(
          nextErrors
        ).length ===
        0
      );
    };

  const handleSubmit =
    async (
      event
    ) => {
      event.preventDefault();

      if (
        register.isPending ||
        !validateForm()
      ) {
        return;
      }

      try {
        await register.mutateAsync({
          first_name:
            formData.first_name.trim(),

          last_name:
            formData.last_name.trim(),

          email:
            formData.email
              .trim()
              .toLowerCase(),

          password:
            formData.password,

          bar_association:
            formData.bar_association.trim(),

          bar_registration_number:
            formData.bar_registration_number.trim(),
        });

        navigate(
          '/login',
          {
            replace:
              true,
            state: {
              registrationSuccess:
                true,
            },
          }
        );
      } catch (
        error
      ) {
        const message =
          String(
            error?.response
              ?.data?.message ||
            error?.message ||
            ''
          ).trim();

        if (
          /e-posta.*kayıtlı|kayıtlı.*e-posta/i.test(
            message
          )
        ) {
          const nextErrors = {
            email:
              'Bu e-posta adresi ile kayıtlı bir kullanıcı bulunmaktadır',
          };

          setErrors(
            nextErrors
          );

          focusFirstInvalidField(
            nextErrors
          );
        }
      }
    };

  const inputClass = (
    hasError
  ) => `
    h-11
    w-full
    rounded-lg
    border
    bg-white
    pl-10
    pr-3.5
    text-sm
    text-gray-900
    shadow-sm
    outline-none
    transition-all
    placeholder:text-gray-400
    dark:bg-white/[0.035]
    dark:text-white
    dark:placeholder:text-slate-500
    ${
      hasError
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-red-500/50'
        : 'border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-white/[0.08] dark:hover:border-white/[0.14] dark:focus:border-blue-500/60'
    }
    disabled:cursor-not-allowed
    disabled:opacity-60
  `;

  const field = ({
    name,
    label,
    type = 'text',
    placeholder,
    autoComplete,
    Icon,
  }) => (
    <div>
      <label
        htmlFor={`register-${name}`}
        className="
          mb-1.5
          block
          text-sm
          font-medium
          text-gray-700
          dark:text-slate-300
        "
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={17}
          className="
            pointer-events-none
            absolute
            left-3.5
            top-1/2
            -translate-y-1/2
            text-gray-400
            dark:text-slate-500
          "
        />

        <input
          ref={
            (
              node
            ) => {
              refs.current[
                name
              ] =
                node;
            }
          }
          id={`register-${name}`}
          type={type}
          name={name}
          value={
            formData[
              name
            ]
          }
          onChange={
            handleChange
          }
          autoComplete={
            autoComplete
          }
          disabled={
            register.isPending
          }
          placeholder={
            placeholder
          }
          aria-invalid={
            Boolean(
              errors[
                name
              ]
            )
          }
          className={
            inputClass(
              errors[
                name
              ]
            )
          }
        />
      </div>

      {errors[name] && (
        <p
          role="alert"
          className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400"
        >
          {errors[name]}
        </p>
      )}
    </div>
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
          TÜMAG Üye Kaydı
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
          Derkenar hesabınızı oluşturun
        </h2>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-gray-500
            dark:text-slate-400
          "
        >
          Mesleki bilgilerinizi girerek hesabınızı oluşturun.
          E-posta adresinize gönderilen bağlantı ile hesabınızı
          doğruladıktan sonra giriş yapabilirsiniz.
        </p>
      </div>

      <form
        onSubmit={
          handleSubmit
        }
        noValidate
        className="space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {field({
            name:
              'first_name',
            label:
              'Ad',
            placeholder:
              'Adınız',
            autoComplete:
              'given-name',
            Icon:
              UserRound,
          })}

          {field({
            name:
              'last_name',
            label:
              'Soyad',
            placeholder:
              'Soyadınız',
            autoComplete:
              'family-name',
            Icon:
              UserRound,
          })}
        </div>

        {field({
          name:
            'email',
          label:
            'E-posta Adresi',
          type:
            'email',
          placeholder:
            'adiniz@hukuk.com',
          autoComplete:
            'email',
          Icon:
            Mail,
        })}

        <div className="grid gap-5 sm:grid-cols-2">
          {field({
            name:
              'bar_association',
            label:
              'Baro',
            placeholder:
              'Örn. Ankara Barosu',
            autoComplete:
              'organization',
            Icon:
              Building2,
          })}

          {field({
            name:
              'bar_registration_number',
            label:
              'Baro Sicil No',
            placeholder:
              'Sicil numaranız',
            autoComplete:
              'off',
            Icon:
              BadgeCheck,
          })}
        </div>

        <div>
          <label
            htmlFor="register-password"
            className="
              mb-1.5
              block
              text-sm
              font-medium
              text-gray-700
              dark:text-slate-300
            "
          >
            Şifre
          </label>

          <div className="relative">
            <LockKeyhole
              size={17}
              className="
                pointer-events-none
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-gray-400
                dark:text-slate-500
              "
            />

            <input
              ref={
                (
                  node
                ) => {
                  refs.current.password =
                    node;
                }
              }
              id="register-password"
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              name="password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              autoComplete="new-password"
              disabled={
                register.isPending
              }
              placeholder="En az 12 karakter"
              className={`${inputClass(
                errors.password
              )} pr-11`}
            />

            <button
              type="button"
              onClick={
                () =>
                  setShowPassword(
                    (
                      current
                    ) =>
                      !current
                  )
              }
              disabled={
                register.isPending
              }
              className="
                absolute
                right-2
                top-1/2
                inline-flex
                h-8
                w-8
                -translate-y-1/2
                items-center
                justify-center
                rounded-lg
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
                disabled:opacity-50
                dark:text-slate-500
                dark:hover:bg-white/[0.05]
                dark:hover:text-white
              "
              aria-label={
                showPassword
                  ? 'Şifreyi gizle'
                  : 'Şifreyi göster'
              }
            >
              {showPassword ? (
                <EyeOff
                  size={17}
                />
              ) : (
                <Eye
                  size={17}
                />
              )}
            </button>
          </div>

          {errors.password && (
            <p
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400"
            >
              {errors.password}
            </p>
          )}
        </div>

        <div className="pt-1">
          <Button
            type="submit"
            loading={
              register.isPending
            }
            disabled={
              register.isPending
            }
            className="w-full"
          >
            {!register.isPending && (
              <BadgeCheck className="h-4 w-4" />
            )}

            {register.isPending
              ? 'Hesap oluşturuluyor'
              : 'Hesap Oluştur'}
          </Button>
        </div>
      </form>

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
          Zaten hesabınız var mı?{' '}
          <Link
            to="/login"
            className="
              font-semibold
              text-blue-600
              hover:text-blue-700
              dark:text-blue-400
              dark:hover:text-blue-300
            "
          >
            Giriş yapın
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
