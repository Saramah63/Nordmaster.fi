import type { Metadata } from 'next';
import { SafeImage } from '@/components/SafeImage';
import { Mail, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { Section } from '@/components/Section';
import { getI18n } from '@/lib/i18n';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale, dict } = getI18n(params);
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    alternates: {
      languages: {
        en: '/en/contact',
        fi: '/fi/contact',
      },
    },
    openGraph: {
      title: dict.meta.contactTitle,
      description: dict.meta.contactDescription,
      url: `https://www.nordmastergroup.com/${locale}/contact`,
    },
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale, dict } = getI18n(params);

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <RevealOnScroll>
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.contact.eyebrow}</div>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">{dict.contact.title}</h1>
                <p className="mt-4 text-lg text-zinc-300 max-w-xl">{dict.contact.description}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/15 shadow-2xl shadow-black/60">
                <SafeImage
                  src="/images/metal/welding-02.jpg"
                  alt={dict.alts.contactHero}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  fallbackLabel={dict.common.imageFallback}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Section
        eyebrow={dict.contact.directEyebrow}
        title={dict.contact.directTitle}
        description={dict.contact.directDescription}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <RevealOnScroll>
            <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6">
              <div className="text-sm uppercase tracking-[0.3em] text-zinc-400">{dict.contacts.company}</div>
              <div className="mt-5 space-y-5">
                <div>
                  <div className="text-lg font-semibold text-white">{dict.contacts.aigars}</div>
                  <div className="text-zinc-400">+358 40 688 7988</div>
                  <a
                    href="tel:+358406887988"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white"
                  >
                    <Phone size={14} />
                    {dict.contacts.call}
                  </a>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">{dict.contacts.martins}</div>
                  <div className="text-zinc-400">+358 40 620 6846</div>
                  <a
                    href="tel:+358406206846"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white"
                  >
                    <Phone size={14} />
                    {dict.contacts.call}
                  </a>
                </div>
                <a
                  href="mailto:support@nordmastergroup.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white"
                >
                  <Mail size={14} />
                  {dict.contacts.email}
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <ContactForm labels={dict.contact.form} />
          </RevealOnScroll>
        </div>
      </Section>
    </div>
  );
}
