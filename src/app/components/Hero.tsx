import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FullBleedSection } from './FullBleedSection';

export function Hero() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <FullBleedSection
      id="top"
      eyebrow={t('hero.title')}
      title={t('hero.headline')}
      description={t('hero.subline')}
      imageSrc="/images/metal/welding-01.jpg"
      imageAlt="Metal construction"
      heightClassName="min-h-[70vh] md:min-h-[85vh]"
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a
          href="#contact"
          className="ctaButton inline-flex items-center justify-center px-8 py-4 shadow-xl hover:shadow-2xl group text-lg"
        >
          {t('hero.cta.offer')}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </a>
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all font-semibold text-lg"
          >
            <Phone className="mr-2" size={18} />
            {t('hero.cta.call')}
            <ChevronDown className="ml-2" size={16} />
          </button>
          {open && (
            <div className="absolute left-0 mt-3 w-60 rounded-2xl border border-white/15 bg-zinc-950/95 backdrop-blur-md p-3 shadow-2xl">
              <a
                href="tel:+358406887988"
                className="block rounded-xl px-3 py-2 text-sm text-white hover:bg-white/10"
              >
                Aigars Cerpinskis — +358 40 688 7988
              </a>
              <a
                href="tel:+358406206846"
                className="block rounded-xl px-3 py-2 text-sm text-white hover:bg-white/10"
              >
                Martins Cerpinskis — +358 40 620 6846
              </a>
            </div>
          )}
        </div>
      </div>
    </FullBleedSection>
  );
}
