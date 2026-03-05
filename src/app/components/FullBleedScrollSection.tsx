import { useEffect, useRef, useState } from 'react';

interface FullBleedScrollSectionProps {
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
}

export function FullBleedScrollSection({
  title,
  description,
  bullets,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  eyebrow,
}: FullBleedScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

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

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      <div className="relative min-h-[50vh] md:min-h-[70vh] w-full">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/60" />
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
            <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6">{title}</h3>
            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mb-8">{description}</p>
            <ul className="grid gap-3 text-zinc-200 max-w-2xl mb-10">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
