import type { Metadata } from 'next';
import { SafeImage } from '@/components/SafeImage';
import Link from 'next/link';
import { ArrowRight, Hammer, ShieldCheck, Wrench } from 'lucide-react';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { getI18n } from '@/lib/i18n';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale, dict } = getI18n(params);
  return {
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDescription,
    alternates: {
      languages: {
        en: '/en/services',
        fi: '/fi/services',
      },
    },
    openGraph: {
      title: dict.meta.servicesTitle,
      description: dict.meta.servicesDescription,
      url: `https://www.nordmastergroup.com/${locale}/services`,
    },
  };
}

const serviceImages = [
  '/images/metal/welding-01.jpg',
  '/images/metal/welding-03.jpg',
  '/images/metal/welding-04.jpg',
];

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale, dict } = getI18n(params);

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <RevealOnScroll>
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.servicesIndex.eyebrow}</div>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">{dict.servicesIndex.title}</h1>
                <p className="mt-4 text-lg text-zinc-300 max-w-xl">{dict.servicesIndex.description}</p>
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
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/15">
                <SafeImage
                  src="/images/metal/welding-02.jpg"
                  alt={dict.alts.servicesHero}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  fallbackLabel={dict.common.imageFallback}
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Section eyebrow={dict.services.eyebrow} title={dict.services.title} description={dict.services.description}>
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.services.cards.map((service, index) => (
            <RevealOnScroll key={service.title} delayMs={index * 120}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={`/${locale}${service.href}`}
                image={serviceImages[index]}
                icon={
                  index === 0 ? <ShieldCheck size={20} /> : index === 1 ? <Hammer size={20} /> : <Wrench size={20} />
                }
                label={service.label}
                ctaLabel={dict.common.exploreService}
                fallbackLabel={dict.common.imageFallback}
              />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={dict.servicesIndex.deliveryEyebrow}
        title={dict.servicesIndex.deliveryTitle}
        description={dict.servicesIndex.deliveryDescription}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <RevealOnScroll>
            <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6 lg:sticky lg:top-28">
              <div className="text-xs uppercase tracking-[0.4em] text-zinc-400">{dict.servicesIndex.deliveryEyebrow}</div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {dict.servicesIndex.deliveryList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6">
              <h3 className="text-2xl font-semibold text-white">{dict.servicesIndex.deliveryBodyTitle}</h3>
              <p className="mt-4 text-sm text-zinc-300">{dict.servicesIndex.deliveryBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {dict.servicesIndex.deliveryCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-xs text-zinc-200"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Section>
    </div>
  );
}
