import Link from 'next/link';
import { ArrowRight, Menu } from 'lucide-react';
import { LocaleSwitcher } from './LocaleSwitcher';
import type { Locale, Dictionary } from '@/lib/i18n';

interface SiteHeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.welding, href: `/${locale}/services/welding` },
    { label: dict.nav.bending, href: `/${locale}/services/bending` },
    { label: dict.nav.metalConstruction, href: `/${locale}/services/metal-construction` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-white/15 bg-white/10" />
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">{dict.brand.short}</div>
              <div className="text-sm font-semibold text-white">{dict.brand.group}</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-zinc-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LocaleSwitcher />
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-zinc-950 px-5 py-2 text-sm font-semibold shadow-lg shadow-amber-500/25"
            >
              {dict.nav.cta}
              <ArrowRight size={16} />
            </Link>
          </div>

          <details className="lg:hidden relative">
            <summary className="list-none inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white cursor-pointer">
              <Menu size={16} />
              {dict.brand.menu}
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-3xl border border-white/10 bg-zinc-950 p-4 shadow-2xl shadow-black/60">
              <div className="flex flex-col gap-3 text-sm text-zinc-200">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <LocaleSwitcher />
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 text-zinc-950 px-4 py-2 text-sm font-semibold"
                >
                  {dict.nav.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
