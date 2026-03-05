'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackLabel: string;
}

export function SafeImage({ src, alt, className, sizes, priority, fallbackLabel }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
          <div className="rounded-full border-2 border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white">
            {fallbackLabel}
          </div>
        </div>
      )}
    </>
  );
}
