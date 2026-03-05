import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl mb-12">
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-4">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-semibold text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base md:text-lg text-zinc-300">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
