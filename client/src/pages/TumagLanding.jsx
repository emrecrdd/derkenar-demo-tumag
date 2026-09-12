import {
  ArrowRight,
  BadgePercent,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  FileSearch,
  FileText,
  FolderKanban,
  Gavel,
  ListChecks,
  Scale,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Users,
} from 'lucide-react';

import {
  Link,
} from 'react-router-dom';

const TumagLanding = () => {
  const aiFeatures = [
    {
      icon: Gavel,
      title: 'Duruşma Hazırlık Brifi',
      description:
        'Dosya kayıtları ve analiz edilmiş belgeler üzerinden duruşma öncesi hazırlık özeti oluşturur.',
    },
    {
      icon: TriangleAlert,
      title: 'Risk ve Eksik Analizi',
      description:
        'Eksik taraf, bilgi, belge ve delilleri görünür hale getirir; dikkat edilmesi gereken noktaları önceliklendirir.',
    },
    {
      icon: CalendarClock,
      title: 'Kritik Tarihler',
      description:
        'Dosya içeriğindeki önemli tarihleri ve yaklaşan işlemleri tek bakışta görmenize yardımcı olur.',
    },
    {
      icon: ListChecks,
      title: 'Önerilen Sonraki İşlemler',
      description:
        'Dosyanın mevcut durumuna göre izlenebilecek sonraki adımları ve hazırlanabilecek görevleri önerir.',
    },
    {
      icon: FileSearch,
      title: 'Belge Odaklı İnceleme',
      description:
        'Analiz edilmiş belgelerden olay, tarih, risk ve eksik bilgi başlıklarını hukuk pratiğine uygun şekilde çıkarır.',
    },
    {
      icon: BrainCircuit,
      title: 'AI Asistan Çalışma Alanı',
      description:
        'Dosyanın bağlamını koruyarak hukuki çalışma sürecinde destek sağlayan ayrı bir yapay zekâ çalışma alanı sunar.',
    },
  ];

  const officeFeatures = [
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
            bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_34%)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-120px]
            top-[360px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
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
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <Link
                to="/"
                className="flex shrink-0 items-center"
              >
                <img
                  src="/favicon.svg"
                  alt="Derkenar"
                  className="h-auto w-[150px] object-contain sm:w-[190px]"
                />
              </Link>

              <span className="text-lg font-light text-slate-600 sm:text-xl">
                ×
              </span>

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-white
                  p-1
                  shadow-lg
                  shadow-black/10
                  sm:h-14
                  sm:w-14
                "
              >
                <img
                  src="/images.jfif"
                  alt="TÜMAG"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="hidden min-w-0 sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  TÜMAG × DERKENAR
                </p>
                <p className="mt-0.5 text-xs font-medium text-slate-300">
                  Üyelere özel avantaj
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
             

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
              pt-16
              lg:grid-cols-[1.05fr_0.95fr]
              lg:pt-24
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
                  leading-[1.06]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  lg:text-[62px]
                "
              >
                Dosyanızı sadece yöneten değil,
                {' '}
                <span className="text-blue-400">
                  sizinle birlikte inceleyen
                </span>
                {' '}
                hukuk büro yönetim sistemi.
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
                Derkenar; dava ve ofis yönetimini yapay zekâ destekli
                dosya inceleme, duruşma hazırlığı, risk tespiti ve
                sonraki işlem önerileriyle aynı çalışma alanında birleştirir.
              </p>

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-2.5
                  text-xs
                  font-semibold
                  text-slate-300
                "
              >
                {[
                  'Duruşma hazırlık brifi',
                  'Risk ve eksik tespiti',
                  'Kritik tarih analizi',
                  'Önerilen sonraki işlemler',
                ].map(
                  (
                    item
                  ) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.04]
                        px-3
                        py-2
                      "
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

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
                  Ücretsiz Hesap Oluştur
                  <ArrowRight size={17} />
                </Link>
              </div>

              <p className="mt-3 max-w-xl text-xs leading-5 text-slate-500">
                Kayıt işlemi herhangi bir satın alma başlatmaz.
                Ücretli plan seçimi daha sonra yapılır.
              </p>

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

            {/* AI PREVIEW */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-xl
                lg:mx-0
                lg:ml-auto
              "
            >
              <div
                className="
                  absolute
                  -inset-4
                  rounded-[32px]
                  bg-gradient-to-br
                  from-blue-600/25
                  via-cyan-500/5
                  to-transparent
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/10
                  bg-slate-900/85
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.07]
                    px-5
                    py-4
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-500/15
                        text-blue-400
                      "
                    >
                      <Sparkles size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Duruşma Hazırlık Brifi
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Dosya kayıtları ve analiz edilmiş belgeler
                      </p>
                    </div>
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-emerald-400/20
                      bg-emerald-500/10
                      px-2.5
                      py-1
                      text-[11px]
                      font-bold
                      text-emerald-300
                    "
                  >
                    AI Destekli
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <div
                    className="
                      rounded-2xl
                      border
                      border-rose-400/15
                      bg-rose-500/[0.07]
                      p-4
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Gavel
                        size={17}
                        className="text-rose-300"
                      />
                      <p className="text-sm font-semibold text-white">
                        Duruşma Özeti
                      </p>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Dosyanın mevcut durumu, hazırlık seviyesi ve duruşmada
                      öne çıkan başlıklar tek bir özet altında toplanır.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-amber-400/15
                        bg-amber-500/[0.06]
                        p-4
                      "
                    >
                      <div className="flex items-center gap-2">
                        <TriangleAlert
                          size={16}
                          className="text-amber-300"
                        />
                        <p className="text-sm font-semibold text-white">
                          Riskler
                        </p>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        Eksik taraf bilgileri, analiz edilmemiş belgeler ve
                        hazırlık eksikleri önceliklendirilir.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-blue-400/15
                        bg-blue-500/[0.06]
                        p-4
                      "
                    >
                      <div className="flex items-center gap-2">
                        <ListChecks
                          size={16}
                          className="text-blue-300"
                        />
                        <p className="text-sm font-semibold text-white">
                          Sonraki İşlemler
                        </p>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        Dosyanın durumuna göre yapılabilecek işlemler ve
                        hazırlanabilecek görevler önerilir.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-4
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          TÜMAG ÜYE AVANTAJI
                        </p>

                        <p className="mt-1 text-lg font-semibold text-white">
                          Ücretli planlarda %20 indirim
                        </p>
                      </div>

                      <BadgePercent
                        size={30}
                        className="shrink-0 text-blue-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}

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
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.82fr_1.18fr]
              lg:items-end
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
                  border-blue-400/15
                  bg-blue-500/[0.08]
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-blue-300
                "
              >
                <Sparkles size={14} />
                DERKENAR AI
              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                "
              >
                Dosyanın içindeki kritik noktaları görünür hale getirin.
              </h2>
            </div>

            <p
              className="
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                lg:ml-auto
              "
            >
              Yapay zekâ katmanı yalnızca metin üretmek için değil;
              dosyanın mevcut durumunu, eksiklerini, risklerini ve
              hazırlanması gereken sonraki adımları daha hızlı görmeniz
              için çalışma akışının içine yerleştirildi.
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
            {aiFeatures.map(
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
                      bg-slate-900/50
                      p-6
                      transition
                      hover:border-blue-500/25
                      hover:bg-slate-900/80
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      <Icon size={21} />
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

      {/* AI WORKFLOW */}

      <section>
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
          <div
            className="
              grid
              gap-5
              lg:grid-cols-[1fr_0.95fr]
            "
          >
            <div
              className="
                rounded-[26px]
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-6
                sm:p-8
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-blue-400
                "
              >
                DURUŞMA ÖNCESİ
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                "
              >
                Duruşmaya girmeden önce dosyanın fotoğrafını görün.
              </h2>

              <div className="mt-8 space-y-3">
                {[
                  {
                    title: 'Dosyanın mevcut durumu',
                    text: 'Hazırlık seviyesi, taraf bilgileri ve analiz edilmiş belgeler birlikte değerlendirilir.',
                  },
                  {
                    title: 'Duruşmada dikkat edilecekler',
                    text: 'Kritik, yüksek ve orta öncelikli konular ayrı başlıklarda görünür hale getirilir.',
                  },
                  {
                    title: 'Eksik bilgi ve deliller',
                    text: 'Dosyada bulunmayan veya doğrulanması gereken kayıtlar ayrı olarak listelenir.',
                  },
                  {
                    title: 'Önerilen işlemler',
                    text: 'Hazırlanabilecek görevler ve takip edilebilecek sonraki adımlar kullanıcıya sunulur.',
                  },
                ].map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      key={
                        item.title
                      }
                      className="
                        flex
                        gap-4
                        rounded-2xl
                        border
                        border-white/[0.06]
                        bg-slate-950/50
                        p-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-blue-500/10
                          text-xs
                          font-bold
                          text-blue-300
                        "
                      >
                        {index + 1}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div
              className="
                rounded-[26px]
                border
                border-blue-500/15
                bg-gradient-to-br
                from-blue-600/12
                via-white/[0.02]
                to-transparent
                p-6
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
                <BrainCircuit size={24} />
              </div>

              <p
                className="
                  mt-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-blue-400
                "
              >
                AI ASİSTAN
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                "
              >
                Dosya bağlamını çalışma alanından ayırmadan inceleyin.
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                Önemli tarihler, riskler, eksik bilgiler ve önerilen
                işlemler aynı hukuki çalışma alanında toplanır. Böylece
                yapay zekâ, ayrı bir sohbet kutusu olmaktan çıkıp
                dosya çalışma sürecinin parçasına dönüşür.
              </p>

              <div
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-slate-950/55
                  p-5
                "
              >
                <p className="text-xs font-bold text-slate-500">
                  ÖRNEK ÇIKTILAR
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    'Önemli tarihlerin çıkarılması',
                    'Risk ve eksik bilgi başlıklarının belirlenmesi',
                    'Belge ve delil eksiklerinin görünür hale getirilmesi',
                    'Sonraki işlemler için öneri oluşturulması',
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
                          size={16}
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


      {/* REAL PRODUCT SCREENS */}

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
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/15
                bg-blue-500/[0.08]
                px-3
                py-1.5
                text-xs
                font-bold
                text-blue-300
              "
            >
              <Sparkles size={14} />
              GERÇEK DERKENAR EKRANLARI
            </div>

            <h2
              className="
                mt-5
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
                sm:text-4xl
              "
            >
              Yapay zekâ anlatmıyor; dosyanın içinde çalışıyor.
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-slate-400
              "
            >
              Aşağıdaki ekranlar Derkenar&apos;ın gerçek çalışma alanından.
              Duruşma hazırlığı, risk analizi ve AI Asistan çıktıları
              doğrudan dosya yönetiminin içinde üretilir.
            </p>
          </div>

          <div className="mt-14 space-y-8">

            {/* SCREEN 1 */}

            <div
              className="
                grid
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-slate-900/60
                lg:grid-cols-[0.9fr_1.1fr]
                lg:items-center
              "
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-rose-500/10
                    text-rose-300
                  "
                >
                  <Gavel size={22} />
                </div>

                <p
                  className="
                    mt-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-rose-300
                  "
                >
                  DURUŞMA HAZIRLIK BRİFİ
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Duruşma öncesi dosyanın mevcut durumunu tek ekranda görün.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Dosya kayıtları ve analiz edilmiş belgeler üzerinden
                  duruşma özeti, taraflar, hazırlık durumu ve dikkat edilmesi
                  gereken başlıklar birlikte sunulur.
                </p>
              </div>

              <div className="border-t border-white/[0.07] lg:border-l lg:border-t-0">
                <img
                  src="/tumag/ai-durusma.jpg"
                  alt="Derkenar Duruşma Hazırlık Brifi ekranı"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-left-top
                  "
                  loading="lazy"
                />
              </div>
            </div>

            {/* SCREEN 2 */}

            <div
              className="
                grid
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-slate-900/60
                lg:grid-cols-[1.1fr_0.9fr]
                lg:items-center
              "
            >
              <div
                className="
                  order-2
                  border-t
                  border-white/[0.07]
                  lg:order-1
                  lg:border-r
                  lg:border-t-0
                "
              >
                <img
                  src="/tumag/ai-riskler.jpg"
                  alt="Derkenar yapay zekâ risk analizi ekranı"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-left-top
                  "
                  loading="lazy"
                />
              </div>

              <div className="order-1 p-6 sm:p-8 lg:order-2 lg:p-10">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-500/10
                    text-amber-300
                  "
                >
                  <TriangleAlert size={22} />
                </div>

                <p
                  className="
                    mt-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-amber-300
                  "
                >
                  RİSK VE EKSİK ANALİZİ
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Dosyadaki eksikleri öncelik seviyeleriyle görün.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Karşı taraf bilgisi, analiz edilmemiş belge, hazırlık
                  eksikliği ve benzeri riskler kritik, yüksek veya orta
                  öncelikle görünür hale getirilir.
                </p>
              </div>
            </div>

            {/* SCREEN 3 */}

            <div
              className="
                grid
                overflow-hidden
                rounded-[28px]
                border
                border-blue-500/15
                bg-gradient-to-br
                from-blue-600/10
                via-slate-900/70
                to-slate-900/70
                lg:grid-cols-[0.9fr_1.1fr]
                lg:items-center
              "
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/15
                    text-blue-300
                  "
                >
                  <BrainCircuit size={22} />
                </div>

                <p
                  className="
                    mt-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-blue-300
                  "
                >
                  AI ASİSTAN
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Önemli tarihleri, riskleri ve önerilen işlemleri dosya bağlamında inceleyin.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  AI Asistan; dosyadaki verilerden önemli tarihleri,
                  eksik bilgileri, riskleri ve izlenebilecek sonraki
                  işlemleri çalışma alanı içinde bir araya getirir.
                </p>
              </div>

              <div className="border-t border-white/[0.07] lg:border-l lg:border-t-0">
                <img
                  src="/tumag/ai-asistan.jpg"
                  alt="Derkenar AI Asistan ekranı"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-left-top
                  "
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OFFICE FEATURES */}

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
              HUKUK BÜRO YÖNETİMİ
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
              Yapay zekâ güçlü olsun; ofis yönetimi de eksik kalmasın.
            </h2>

            <p
              className="
                mt-4
                text-base
                leading-7
                text-slate-400
              "
            >
              Derkenar, yapay zekâ özelliklerini günlük hukuk bürosu
              işleyişinden ayırmadan dava, müvekkil, belge, görev ve
              takvim yönetimiyle birlikte sunar.
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
            {officeFeatures.map(
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

      {/* TUMAG OFFER */}

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
              grid
              overflow-hidden
              rounded-[30px]
              border
              border-blue-500/15
              bg-gradient-to-br
              from-blue-600/15
              via-white/[0.025]
              to-transparent
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div className="px-6 py-12 sm:px-10 sm:py-14">
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-white
                    p-1
                  "
                >
                  <img
                    src="/images.jfif"
                    alt="TÜMAG"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-blue-500/10
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-blue-300
                  "
                >
                  <Scale size={14} />
                  TÜMAG ÜYELERİNE ÖZEL
                </div>
              </div>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                "
              >
                Derkenar&apos;ın hukuk büro yönetimi ve AI özelliklerine
                TÜMAG üyelerine özel avantajla erişin.
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                "
              >
                Hesabınızı ücretsiz oluşturun ve e-posta adresinizi
                doğrulayın. Kayıt işlemi satın alma anlamına gelmez;
                ücretli plan seçimi daha sonra yapılır.
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
                    transition
                    hover:bg-blue-500
                  "
                >
                  Ücretsiz Hesap Oluştur
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div
              className="
                border-t
                border-white/[0.07]
                px-8
                py-10
                text-center
                lg:border-l
                lg:border-t-0
                lg:px-14
                lg:py-16
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-slate-400
                "
              >
                TÜMAG ÜYE AVANTAJI
              </p>

              <div
                className="
                  mt-2
                  flex
                  items-end
                  justify-center
                  gap-3
                "
              >
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

              <div
                className="
                  mx-auto
                  mt-5
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
