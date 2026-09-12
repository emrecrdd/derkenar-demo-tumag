import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  FileText,
  FolderKanban,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';

import {
  Link,
} from 'react-router-dom';

const TumagLanding = () => {
  const features = [
    {
      icon: FolderKanban,
      title: 'Dava ve Dosya Yönetimi',
      description:
        'Dava dosyalarınızı, tarafları, belgeleri ve süreçleri tek merkezden yönetin.',
    },
    {
      icon: Users,
      title: 'Müvekkil Yönetimi',
      description:
        'Müvekkil bilgilerine, geçmiş işlemlere ve ilgili dosyalara hızlıca ulaşın.',
    },
    {
      icon: CalendarDays,
      title: 'Görev ve Takvim',
      description:
        'Duruşmaları, toplantıları ve yapılacak işleri düzenli şekilde takip edin.',
    },
    {
      icon: FileText,
      title: 'Belge Yönetimi',
      description:
        'Hukuki belgelerinizi dosyalarla ilişkilendirin ve çalışma alanınızda düzenli tutun.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Ofis Yönetimi',
      description:
        'Ekip içi görev dağılımı ve günlük iş akışınızı tek sistem üzerinden yönetin.',
    },
    {
      icon: ShieldCheck,
      title: 'Güvenli Erişim',
      description:
        'Hukuk profesyonelleri için geliştirilen güvenli hesap ve erişim altyapısını kullanın.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%)]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            pb-20
            pt-7
            sm:px-8
            lg:px-10
            lg:pb-28
          "
        >

          {/* NAV */}

          <div className="flex items-center justify-between gap-4">

            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src="/derkenar-logo.png"
                alt="Derkenar"
                className="h-auto w-[190px] object-contain sm:w-[230px]"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">

              <Link
                to="/login"
                className="
                  hidden
                  rounded-lg
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-slate-300
                  transition
                  hover:bg-white/[0.06]
                  hover:text-white
                  sm:inline-flex
                "
              >
                Giriş Yap
              </Link>

              <Link
                to="/kayit"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition
                  hover:bg-blue-500
                "
              >
                Kayıt Ol
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

          {/* HERO CONTENT */}

          <div
            className="
              grid
              items-center
              gap-14
              pt-20
              lg:grid-cols-[1.12fr_0.88fr]
              lg:pt-28
            "
          >

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-400/20
                  bg-blue-500/10
                  px-3.5
                  py-2
                  text-xs
                  font-bold
                  tracking-wide
                  text-blue-300
                "
              >
                <Scale size={15} />
                TÜMAG ÜYELERİNE ÖZEL
              </div>

              <h1
                className="
                  mt-7
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  lg:text-[64px]
                "
              >
                Hukuk çalışmalarınızı
                {' '}
                <span className="text-blue-400">
                  Derkenar
                </span>
                {' '}
                ile yönetin.
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-slate-400
                  sm:text-lg
                  sm:leading-8
                "
              >
                Dava, müvekkil, görev, toplantı ve belgelerinizi
                tek çalışma alanında yönetin. TÜMAG üyeleri
                Derkenar avantajlarından özel indirimle yararlanır.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <Link
                  to="/kayit"
                  className="
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    text-sm
                    font-bold
                    text-white
                    shadow-xl
                    shadow-blue-600/20
                    transition
                    hover:bg-blue-500
                  "
                >
                  TÜMAG Üyesi Olarak Kayıt Ol
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/login"
                  className="
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-6
                    text-sm
                    font-semibold
                    text-slate-200
                    transition
                    hover:border-white/20
                    hover:bg-white/[0.08]
                  "
                >
                  <LockKeyhole size={16} />
                  Hesabım Var
                </Link>

              </div>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  text-sm
                  text-slate-400
                "
              >

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400"
                  />
                  Güvenli hesap doğrulama
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400"
                  />
                  Web üzerinden erişim
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400"
                  />
                  Kurulum gerektirmez
                </span>

              </div>

            </div>

            {/* DISCOUNT CARD */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-md
                lg:mx-0
                lg:ml-auto
              "
            >

              <div
                className="
                  absolute
                  -inset-1
                  rounded-[28px]
                  bg-gradient-to-br
                  from-blue-600/30
                  via-blue-500/5
                  to-transparent
                  blur-xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/10
                  bg-white/[0.055]
                  p-7
                  shadow-2xl
                  backdrop-blur-xl
                  sm:p-8
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/15
                    text-blue-400
                  "
                >
                  <BadgePercent size={25} />
                </div>

                <p
                  className="
                    mt-7
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-slate-400
                  "
                >
                  TÜMAG ÜYE AVANTAJI
                </p>

                <div className="mt-2 flex items-end gap-3">

                  <span
                    className="
                      text-6xl
                      font-semibold
                      tracking-[-0.06em]
                      text-white
                      sm:text-7xl
                    "
                  >
                    %20
                  </span>

                  <span
                    className="
                      pb-2
                      text-lg
                      font-semibold
                      text-blue-400
                    "
                  >
                    indirim
                  </span>

                </div>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  TÜMAG üyeleri Derkenar kullanımında özel
                  yüzde 20 avantajdan yararlanır.
                </p>

                <div
                  className="
                    my-7
                    h-px
                    bg-white/[0.08]
                  "
                />

                <div className="space-y-4">

                  {[
                    'Dava ve müvekkil yönetimi',
                    'Görev ve toplantı takibi',
                    'Belge ve dosya organizasyonu',
                    'Ofis içi çalışma yönetimi',
                  ].map(
                    (
                      item
                    ) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-slate-300
                        "
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-blue-400"
                        />

                        {item}
                      </div>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        className="
          border-y
          border-white/[0.06]
          bg-white/[0.018]
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-20
            sm:px-8
            lg:px-10
            lg:py-24
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.17em]
                text-blue-400
              "
            >
              DERKENAR
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Hukuki işlerinizi tek çalışma alanında toplayın.
            </h2>

            <p
              className="
                mt-4
                text-base
                leading-7
                text-slate-400
              "
            >
              Günlük hukuk pratiğinde ihtiyaç duyduğunuz temel
              süreçleri farklı araçlara dağılmadan yönetin.
            </p>

          </div>

          <div
            className="
              mt-12
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {features.map(
              (
                feature
              ) => {
                const Icon =
                  feature.icon;

                return (
                  <div
                    key={
                      feature.title
                    }
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-6
                      transition
                      hover:border-blue-500/20
                      hover:bg-white/[0.04]
                    "
                  >

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-base
                        font-semibold
                        text-white
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-slate-400
                      "
                    >
                      {feature.description}
                    </p>

                  </div>
                );
              }
            )}
          </div>

        </div>

      </section>

      {/* CTA */}

      <section>
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-20
            sm:px-8
            lg:px-10
            lg:py-28
          "
        >

          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-blue-500/15
              bg-gradient-to-br
              from-blue-600/15
              via-white/[0.025]
              to-transparent
              px-6
              py-12
              text-center
              sm:px-10
              sm:py-16
            "
          >

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-blue-500/15
                text-blue-400
              "
            >
              <Scale size={24} />
            </div>

            <h2
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              TÜMAG üyelerine özel avantajla Derkenar&apos;a katılın.
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-slate-400
                sm:text-base
              "
            >
              Hesabınızı oluşturun, e-posta adresinizi doğrulayın
              ve çalışma alanınızı kullanmaya başlayın.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
              "
            >

              <Link
                to="/kayit"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-blue-500
                "
              >
                Ücretsiz Hesap Oluştur
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/login"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/[0.07]
                "
              >
                Giriş Yap
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="
          border-t
          border-white/[0.06]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-5
            py-7
            text-xs
            text-slate-500
            sm:px-8
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-10
          "
        >

          <p>
            © {new Date().getFullYear()} Derkenar
          </p>

          <p>
            TÜMAG üyelerine özel kullanım avantajı.
          </p>

        </div>
      </footer>

    </div>
  );
};

export default TumagLanding;