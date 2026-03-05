import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import type { Locale, Dictionary } from '@/lib/i18n';

interface SiteFooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function SiteFooter({ locale, dict }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_1.2fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.contacts.company}</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">{dict.footer.title}</h3>
            <p className="mt-4 text-sm text-zinc-400 max-w-sm">{dict.footer.body}</p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.nav.services}</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-300">
              <Link href={`/${locale}`}>{dict.nav.home}</Link>
              <Link href={`/${locale}/services`}>{dict.nav.services}</Link>
              <Link href={`/${locale}/services/welding`}>{dict.nav.welding}</Link>
              <Link href={`/${locale}/services/bending`}>{dict.nav.bending}</Link>
              <Link href={`/${locale}/services/metal-construction`}>{dict.nav.metalConstruction}</Link>
              <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.contacts.eyebrow}</div>
            <div className="mt-4 space-y-4 text-sm text-zinc-300">
              <div>
                <div className="font-semibold text-white">{dict.contacts.aigars}</div>
                <div className="text-zinc-400">+358 40 688 7988</div>
                <a
                  href="tel:+358406887988"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white"
                >
                  <Phone size={14} />
                  {dict.contacts.call}
                </a>
              </div>
              <div>
                <div className="font-semibold text-white">{dict.contacts.martins}</div>
                <div className="text-zinc-400">+358 40 620 6846</div>
                <a
                  href="tel:+358406206846"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white"
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
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>{dict.footer.copyright}</div>
          <div className="flex gap-4">
            <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
            <span className="text-zinc-700">|</span>
            <span>{dict.footer.regionLabel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
