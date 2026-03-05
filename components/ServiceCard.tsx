import Link from 'next/link';
import type { ReactNode } from 'react';
import { SafeImage } from './SafeImage';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: ReactNode;
  label?: string;
  ctaLabel: string;
  fallbackLabel: string;
}

export function ServiceCard({
  title,
  description,
  href,
  image,
  icon,
  label,
  ctaLabel,
  fallbackLabel,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={image}
          alt={title}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackLabel={fallbackLabel}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
        {label && (
          <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-zinc-950/80 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white">
            {label}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-amber-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-300">{description}</p>
        <span className="mt-auto text-xs uppercase tracking-[0.3em] text-amber-300">{ctaLabel}</span>
      </div>
    </Link>
  );
}
