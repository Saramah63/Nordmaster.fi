import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Intro() {
  const { t } = useLanguage();

  return (
    <section id="intro" className="bg-zinc-950 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h2 className="sectionTitle text-3xl md:text-4xl font-semibold mb-4">{t('intro.title')}</h2>
          <p className="bodyText text-lg mb-6">{t('intro.body')}</p>
          <a
            href="#contact"
            className="ctaButton inline-flex items-center gap-2 text-sm"
          >
            {t('intro.cta')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
