import { useLanguage } from '../contexts/LanguageContext';

export function MapSection() {
  const { t } = useLanguage();

  return (
    <section id="map" className="bg-zinc-950 text-white pb-16 px-4">
      <div className="container mx-auto mb-6">
        <div className="text-xs font-semibold text-zinc-400 tracking-[0.4em] uppercase mb-4">
          {t('map.label')}
        </div>
        <h2 className="sectionTitle text-3xl md:text-4xl font-semibold">{t('map.title')}</h2>
      </div>
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="aspect-[16/7] w-full min-h-[320px] md:min-h-[420px]">
          <iframe
            title="Nordmaster Group map"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Turku,Finland&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
