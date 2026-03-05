import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../data/services';
import { FullBleedSection } from './FullBleedSection';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-zinc-400 tracking-[0.4em] uppercase mb-4">
            {t('services.label')}
          </div>
          <h2 className="sectionTitle text-4xl md:text-5xl font-semibold mb-4">
            {t('services.title')}
          </h2>
          <p className="bodyText text-lg">
            {t('services.description')}
          </p>
        </div>
      </div>

      <div className="space-y-8 pb-10">
        {servicesData.map((service) => (
          <FullBleedSection
            key={service.id}
            eyebrow={t(service.fullBleed.eyebrowKey)}
            title={t(service.fullBleed.titleKey)}
            description={t(service.fullBleed.descriptionKey)}
            bullets={service.fullBleed.bulletKeys.map((key) => t(key))}
            ctaLabel={t('services.fullbleed.cta')}
            ctaHref="#contact"
            imageSrc={service.image}
            imageAlt={t(service.fullBleed.imageAltKey)}
          />
        ))}
      </div>
    </section>
  );
}
