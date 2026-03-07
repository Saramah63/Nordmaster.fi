import { Phone, Mail, Copy, Check, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('support@nordmastergroup.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950 text-white">
      <div className="container mx-auto relative z-10">
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

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <div className="text-sm font-semibold text-white">{t('contact.person1')}</div>
              <div className="mt-1 text-xs text-zinc-400">{t('contact.person1.lang')}</div>
              <div className="mt-3 text-zinc-300">+358 40 688 7988</div>
              <a href="tel:+358406887988" className="ctaButton mt-4 inline-flex items-center gap-2 text-xs">
                {t('contact.call')}
              </a>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <div className="text-sm font-semibold text-white">{t('contact.person2')}</div>
              <div className="mt-1 text-xs text-zinc-400">{t('contact.person2.lang')}</div>
              <div className="mt-3 text-zinc-300">+358 40 620 6846</div>
              <a href="tel:+358406206846" className="ctaButton mt-4 inline-flex items-center gap-2 text-xs">
                {t('contact.call')}
              </a>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <div className="text-sm font-semibold text-white">{t('contact.person3')}</div>
              <div className="mt-1 text-xs text-zinc-400">{t('contact.person3.lang')}</div>
              <div className="mt-3 text-zinc-300">+358 40 3734009</div>
              <a href="tel:+358403734009" className="ctaButton mt-4 inline-flex items-center gap-2 text-xs">
                {t('contact.call')}
              </a>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <div className="text-sm font-semibold text-white">{t('contact.person4')}</div>
              <div className="mt-1 text-xs text-zinc-400">{t('contact.person4.lang')}</div>
              <div className="mt-3 text-zinc-300">+358 40 6235007</div>
              <a href="tel:+358406235007" className="ctaButton mt-4 inline-flex items-center gap-2 text-xs">
                {t('contact.call')}
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="mailto:support@nordmastergroup.com"
              className="relative z-10 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-sm font-semibold text-white pointer-events-auto"
            >
              <Mail size={18} />
              support@nordmastergroup.com
            </a>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-white hover:border-white/40"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? t('contact.email.copied') : t('contact.email.copy')}
              </button>
              <span>{t('contact.email.helper')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
