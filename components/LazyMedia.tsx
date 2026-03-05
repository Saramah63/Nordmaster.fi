'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Aspect = 'video' | 'square' | 'banner';

interface LazyMediaProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: Aspect;
  threshold?: number;
  rootMargin?: string;
}

const aspectClass: Record<Aspect, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  banner: 'aspect-[3/1] md:aspect-[4/1]',
};

export function LazyMedia({
  src,
  alt,
  className,
  aspect = 'video',
  threshold = 0.2,
  rootMargin = '200px',
}: LazyMediaProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 ${
        aspectClass[aspect]
      } ${className || ''}`}
    >
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {isVisible ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        ) : null}
      </div>

      {!isVisible && (
        <div className="absolute inset-0 bg-slate-900/70">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%)' }} />
        </div>
      )}
    </div>
  );
}
