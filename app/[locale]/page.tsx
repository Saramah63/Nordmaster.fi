import type { Metadata } from 'next';
import { SafeImage } from '@/components/SafeImage';
import Link from 'next/link';
import { ArrowRight, Hammer, Phone, ShieldCheck, Wrench, MapPin, Mail } from 'lucide-react';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { getI18n } from '@/lib/i18n';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale, dict } = getI18n(params);
  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      languages: {
        en: '/en',
        fi: '/fi',
      },
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `https://www.nordmastergroup.com/${locale}`,
    },
  };
}

const serviceImages = [
  '/images/metal/welding-01.jpg',
  '/images/metal/welding-03.jpg',
  '/images/metal/welding-04.jpg',
];

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale, dict } = getI18n(params);

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <RevealOnScroll>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-zinc-200">
                  {dict.hero.eyebrow}
                </div>
                <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-white">{dict.hero.title}</h1>
                <p className="mt-5 text-lg text-zinc-300 max-w-xl">{dict.hero.valueProp}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-zinc-950 px-6 py-3 text-sm font-semibold"
                  >
                    {dict.hero.ctaOffer}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+358406887988"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                  >
                    {dict.hero.ctaCall}
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/15 shadow-2xl shadow-black/60">
                <SafeImage
                  src="/images/metal/welding-02.jpg"
                  alt={dict.alts.homeHero}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                  fallbackLabel={dict.common.imageFallback}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-black/70 p-5 text-sm text-zinc-200">
                  {dict.hero.imageCaption}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Section eyebrow={dict.serviceIntro.eyebrow} title={dict.serviceIntro.title} description={dict.serviceIntro.description}>
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

      <Section eyebrow={dict.services.eyebrow} title={dict.services.title} description={dict.services.description}>
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.services.cards.map((service, index) => (
            <RevealOnScroll key={`${service.title}-grid`} delayMs={index * 120}>
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

      <Section eyebrow={dict.howWeWork.eyebrow} title={dict.howWeWork.title} description={dict.howWeWork.description}>
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.howWeWork.steps.map((step, index) => (
            <RevealOnScroll key={step.title} delayMs={index * 120}>
              <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6">
                <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  {dict.howWeWork.stepLabel} {index + 1}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{step.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section eyebrow={dict.coverage.eyebrow} title={dict.coverage.title} description={dict.coverage.description}>
        <div className="grid gap-6 lg:grid-cols-2">
          {dict.coverage.regions.map((area, index) => (
            <RevealOnScroll key={area.region} delayMs={index * 120}>
              <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
                  <MapPin size={16} />
                  {area.region}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.cities.map((city) => (
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
                  <Mail size={14} />
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
                {dict.hero.ctaOffer}
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
                  <div className="text-xs uppercase tracking-[0.4em] text-zinc-700">{dict.ctaBand.eyebrow}</div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold">{dict.ctaBand.title}</h2>
                  <p className="mt-4 text-sm text-zinc-800">{dict.ctaBand.body}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 text-white px-6 py-3 text-sm font-semibold"
                  >
                    {dict.ctaBand.ctaOffer}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+358406887988"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold"
                  >
                    {dict.ctaBand.ctaCall}
                    <Phone size={16} />
                  </a>
                  <a
                    href="tel:+358406206846"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold"
                  >
                    {dict.ctaBand.ctaCallMartins}
                    <Phone size={16} />
                  </a>
                  <a
                    href="mailto:support@nordmastergroup.com"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold"
                  >
                    {dict.ctaBand.ctaEmail}
                    <Mail size={16} />
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
