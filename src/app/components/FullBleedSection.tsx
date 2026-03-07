import { useEffect, useRef, useState, type ReactNode } from 'react';

interface FullBleedSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  heightClassName?: string;
  children?: ReactNode;
}

export function FullBleedSection({
  id,
  eyebrow,
  title,
  description,
  bullets,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  heightClassName = 'min-h-[50vh] md:min-h-[70vh]',
  children,
}: FullBleedSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
    >
      <div className={`relative w-full ${heightClassName}`}>
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {!imageError ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="h-full w-full bg-zinc-900 flex items-center justify-center text-white text-xl font-semibold tracking-wide">
              Image unavailable
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/80" />
        </div>

        <div
          className={`relative z-10 h-full w-full transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-16">
            {eyebrow && (
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                {eyebrow}
              </div>
            )}
            <h2 className="sectionTitle text-3xl md:text-5xl font-semibold mb-6">{title}</h2>
            {description && (
              <p className="bodyText text-lg md:text-xl max-w-2xl mb-8">{description}</p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="grid gap-3 text-zinc-200 max-w-2xl mb-10">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {ctaLabel && ctaHref && (
              <div>
                <a href={ctaHref} className="ctaButton inline-flex items-center gap-2 text-sm">
                  {ctaLabel}
                </a>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
