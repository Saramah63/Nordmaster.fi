import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { getI18n, locales } from '@/lib/i18n';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nordmastergroup.com'),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale, dict } = getI18n(params);

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div className="bg-zinc-950 text-zinc-100">
      <SiteHeader locale={locale} dict={dict} />
      <main className="pt-24">{children}</main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
