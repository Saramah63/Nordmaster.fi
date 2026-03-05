import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <div>
            <div className="text-xs font-semibold text-zinc-400 tracking-[0.4em] uppercase mb-4">
              {t('contact.label')}
            </div>
            <h2 className="sectionTitle text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="bodyText text-xl leading-relaxed mb-10">
              {t('contact.description')}
            </p>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Phone size={18} />
                  {t('contact.person1')}
                </div>
                <div className="mt-2 text-zinc-300">+358 40 688 7988</div>
                <a
                  href="tel:+358406887988"
                  className="ctaButton mt-4 inline-flex items-center gap-2 text-xs"
                >
                  {t('contact.call')}
                </a>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Phone size={18} />
                  {t('contact.person2')}
                </div>
                <div className="mt-2 text-zinc-300">+358 40 620 6846</div>
                <a
                  href="tel:+358406206846"
                  className="ctaButton mt-4 inline-flex items-center gap-2 text-xs"
                >
                  {t('contact.call')}
                </a>
              </div>
              <a
                href="mailto:support@nordmastergroup.com"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-sm font-semibold text-white"
              >
                <Mail size={18} />
                support@nordmastergroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
