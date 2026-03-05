import type { Metadata } from 'next';
import { SafeImage } from '@/components/SafeImage';
import Link from 'next/link';
import { ArrowRight, Hammer, Phone } from 'lucide-react';
import { Section } from '@/components/Section';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { getI18n } from '@/lib/i18n';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale, dict } = getI18n(params);
  return {
    title: dict.meta.bendingTitle,
    description: dict.meta.bendingDescription,
    alternates: {
      languages: {
        en: '/en/services/bending',
        fi: '/fi/services/bending',
      },
    },
    openGraph: {
      title: dict.meta.bendingTitle,
      description: dict.meta.bendingDescription,
      url: `https://www.nordmastergroup.com/${locale}/services/bending`,
    },
  };
}

export default function BendingPage({ params }: { params: { locale: string } }) {
  const { locale, dict } = getI18n(params);

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <RevealOnScroll>
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.bending.eyebrow}</div>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">{dict.bending.title}</h1>
                <p className="mt-4 text-lg text-zinc-300 max-w-xl">{dict.bending.description}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950"
                  >
                    {dict.nav.cta}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+358406887988"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
                  >
                    {dict.hero.ctaCall}
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/15 shadow-2xl shadow-black/60">
                <SafeImage
                  src="/images/metal/welding-03.jpg"
                  alt={dict.alts.bendingHero}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  fallbackLabel={dict.common.imageFallback}
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Section
        eyebrow={dict.bending.includedEyebrow}
        title={dict.bending.includedTitle}
        description={dict.bending.includedDescription}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.bending.items.map((item, index) => (
            <RevealOnScroll key={item.title} delayMs={index * 120}>
              <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-amber-300">
                  <Hammer size={18} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{item.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section eyebrow={dict.contacts.eyebrow} title={dict.contacts.title} description={dict.contacts.description}>
        <RevealOnScroll>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6">
              <div className="text-sm uppercase tracking-[0.3em] text-zinc-400">{dict.contacts.company}</div>
              <div className="mt-4 space-y-5">
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
                  {dict.contacts.email}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-400/20 via-zinc-900 to-zinc-950 p-6">
              <div className="text-xs uppercase tracking-[0.4em] text-zinc-400">{dict.contacts.responseEyebrow}</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{dict.contacts.responseTitle}</h3>
              <p className="mt-3 text-sm text-zinc-300">{dict.contacts.responseBody}</p>
              <Link
                href={`/${locale}/contact`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-zinc-950"
              >
                {dict.nav.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </Section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="rounded-[32px] border border-white/10 bg-amber-400 p-8 lg:p-12 text-zinc-950">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <div className="text-xs uppercase tracking-[0.4em] text-zinc-700">{dict.bending.ctaEyebrow}</div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold">{dict.bending.ctaTitle}</h2>
                  <p className="mt-4 text-sm text-zinc-800">{dict.bending.ctaBody}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 text-white px-6 py-3 text-sm font-semibold"
                  >
                    {dict.bending.ctaOffer}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+358406887988"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold"
                  >
                    {dict.bending.ctaCall}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
