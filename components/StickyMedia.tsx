'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Flame, Shield, Layers, Zap } from 'lucide-react';

interface MediaItem {
  src: string;
  alt: string;
  caption: string;
  label: string;
}

interface StickyMediaProps {
  items: MediaItem[];
  activeIndex: number;
  className?: string;
}

const placeholderVariants = [
  { icon: Flame, gradient: 'from-amber-500/30 via-zinc-900 to-black', pattern: '24px', label: 'Heat zone' },
  { icon: Shield, gradient: 'from-emerald-500/20 via-zinc-900 to-black', pattern: '28px', label: 'Safety ready' },
  { icon: Layers, gradient: 'from-sky-500/20 via-zinc-900 to-black', pattern: '20px', label: 'Layered build' },
  { icon: Zap, gradient: 'from-fuchsia-500/20 via-zinc-900 to-black', pattern: '26px', label: 'Fast response' },
];

export function StickyMedia({ items, activeIndex, className }: StickyMediaProps) {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const visibleIndices = useMemo(() => {
    const set = new Set<number>();
    set.add(activeIndex);
    if (activeIndex - 1 >= 0) set.add(activeIndex - 1);
    if (activeIndex + 1 < items.length) set.add(activeIndex + 1);
    return set;
  }, [activeIndex, items.length]);

  const activeItem = items[activeIndex];

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50 ${className || ''}`}>
      <div className="relative aspect-[4/5] md:aspect-[3/4]">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />

        {items.map((item, index) => {
          if (!visibleIndices.has(index)) return null;
          const isActive = index === activeIndex;
          const isFailed = !!failed[index];
          return (
            <div
              key={item.src}
              className={`absolute inset-0 transition-all duration-700 ease-out ${isActive && !isFailed ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}
            >
              {/* TODO: Add file to /public/images/metal/ */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority={false}
                onError={() => setFailed((prev) => ({ ...prev, [index]: true }))}
              />
            </div>
          );
        })}

        {items.map((item, index) => {
          if (!visibleIndices.has(index)) return null;
          const isActive = index === activeIndex;
          const isFailed = !!failed[index];
          if (!isFailed) return null;
          const variant = placeholderVariants[index % placeholderVariants.length];
          const Icon = variant.icon;
          return (
            <div
              key={`${item.src}-placeholder`}
              className={`absolute inset-0 transition-all duration-700 ease-out ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${variant.gradient}`} />
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: variant.pattern }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.3em] text-zinc-200">
                <Icon size={14} />
                {variant.label}
              </div>
              <div className="absolute bottom-16 left-6 text-lg font-semibold text-white">{item.label}</div>
            </div>
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      <div className="absolute top-5 left-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-200">
          {activeItem?.label}
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-200">
          {activeItem?.caption}
        </div>
      </div>
    </div>
  );
}
