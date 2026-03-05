import type { Metadata } from 'next';
import { SafeImage } from '@/components/SafeImage';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { ScrollSteps } from '@/components/ScrollSteps';
import { Section } from '@/components/Section';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { getI18n } from '@/lib/i18n';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale, dict } = getI18n(params);
  return {
    title: dict.meta.weldingTitle,
    description: dict.meta.weldingDescription,
    alternates: {
      languages: {
        en: '/en/services/welding',
        fi: '/fi/services/welding',
      },
    },
    openGraph: {
      title: dict.meta.weldingTitle,
      description: dict.meta.weldingDescription,
      url: `https://www.nordmastergroup.com/${locale}/services/welding`,
    },
  };
}

export default function WeldingPage({ params }: { params: { locale: string } }) {
  const { locale, dict } = getI18n(params);

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <RevealOnScroll>
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.welding.eyebrow}</div>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">{dict.welding.title}</h1>
                <p className="mt-4 text-lg text-zinc-300 max-w-xl">{dict.welding.description}</p>
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
                  src="/images/metal/welding-01.jpg"
                  alt={dict.alts.weldingHero}
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
        id="scrolly"
        className="relative"
        eyebrow={dict.welding.stepsEyebrow}
        title={dict.welding.stepsTitle}
        description={dict.welding.stepsDescription}
      >
        <ScrollSteps
          steps={dict.welding.steps}
          progressLabel={dict.welding.progressLabel}
          debugLabel={dict.welding.debugLabel}
        />
      </Section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="rounded-[32px] border border-white/10 bg-amber-400 p-8 lg:p-12 text-zinc-950">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <div className="text-xs uppercase tracking-[0.4em] text-zinc-700">{dict.welding.ctaEyebrow}</div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold">{dict.welding.ctaTitle}</h2>
                  <p className="mt-4 text-sm text-zinc-800">{dict.welding.ctaBody}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 text-white px-6 py-3 text-sm font-semibold"
                  >
                    {dict.welding.ctaOffer}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+358406206846"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold"
                  >
                    {dict.welding.ctaCall}
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
