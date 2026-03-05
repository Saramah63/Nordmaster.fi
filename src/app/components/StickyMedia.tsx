import { useMemo } from 'react';

export interface MediaItem {
  src: string;
  alt: string;
  overlay: string;
  caption: string;
}

interface StickyMediaProps {
  items: MediaItem[];
  activeIndex: number;
}

export function StickyMedia({ items, activeIndex }: StickyMediaProps) {
  const safeIndex = Math.min(Math.max(activeIndex, 0), items.length - 1);
  const activeItem = items[safeIndex];

  const visibleIndices = useMemo(() => {
    const set = new Set<number>();
    set.add(safeIndex);
    if (safeIndex - 1 >= 0) set.add(safeIndex - 1);
    if (safeIndex + 1 < items.length) set.add(safeIndex + 1);
    return set;
  }, [safeIndex, items.length]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] shadow-2xl shadow-black/50">
      <div className="relative w-full h-[40vh] min-h-[280px] md:h-[60vh] md:min-h-[420px]">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black" />
        {items.map((item, index) => {
          if (!visibleIndices.has(index)) return null;
          const isActive = index === safeIndex;
          return (
            <div
              key={item.src}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
              }`}
            >
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      <div className="absolute top-5 left-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
          {activeItem?.overlay}
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
          {activeItem?.caption}
        </div>
      </div>
    </div>
  );
}
