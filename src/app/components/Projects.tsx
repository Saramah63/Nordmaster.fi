import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FullBleedScrollSection } from './FullBleedScrollSection';
import { servicesData } from '../data/services';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4 bg-zinc-950 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-zinc-400 tracking-[0.4em] uppercase mb-4">
            {t('story.label')}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('story.title')}
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            {t('story.description')}
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {servicesData.map((service) => (
          <FullBleedScrollSection
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

      <div className="container mx-auto mt-20">
        <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 lg:p-10">
          <div className="text-xs font-semibold text-zinc-400 tracking-[0.4em] uppercase mb-4">
            {t('coverage.label')}
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            {t('coverage.title')}
          </h3>
          <p className="text-zinc-300 mb-6">{t('coverage.description')}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white mb-3">{t('coverage.region1')}</div>
              <div className="flex flex-wrap gap-2">
                {t('coverage.region1.cities').split(',').map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs text-zinc-200"
                  >
                    {city.trim()}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white mb-3">{t('coverage.region2')}</div>
              <div className="flex flex-wrap gap-2">
                {t('coverage.region2.cities').split(',').map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs text-zinc-200"
                  >
                    {city.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-zinc-950 rounded-lg hover:bg-amber-300 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            {t('projects.cta.button')}
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
