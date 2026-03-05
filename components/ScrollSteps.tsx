'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { StickyMedia } from './StickyMedia';

interface StepItem {
  id: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  alt: string;
  caption: string;
  overlayLabel: string;
}

interface ScrollStepsProps {
  steps: StepItem[];
}

export function ScrollSteps({ steps }: ScrollStepsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const mediaItems = useMemo(
    () =>
      steps.map((step) => ({
        src: step.image,
        alt: step.alt,
        caption: step.caption,
        label: step.overlayLabel,
      })),
    [steps]
  );

  return (
    <>
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12">
        <div className="lg:sticky lg:top-28 h-max">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Progress</div>
            <div className="text-3xl font-semibold text-white">
              {String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </div>
          </div>
          <div className="relative">
            <StickyMedia items={mediaItems} activeIndex={activeIndex} />
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute -left-6 top-0 h-full w-[2px] bg-white/10">
            <div
              className="absolute left-0 w-full bg-amber-400 transition-all duration-500"
              style={{ height: `${((activeIndex + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <section
                  key={step.id}
                  id={step.id}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  className={`relative min-h-[60vh] lg:min-h-[80vh] rounded-3xl border transition-all duration-300 px-6 py-10 md:px-10 ${
                    isActive
                      ? 'border-white/40 bg-white/12 shadow-2xl shadow-amber-500/20 text-white'
                      : 'border-white/15 bg-white/5 text-zinc-300 opacity-80'
                  }`}
                >
                  <div className={`absolute left-0 top-10 h-16 w-1 rounded-full ${isActive ? 'bg-amber-400' : 'bg-white/10'}`} />
                  <div className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] ${isActive ? 'text-amber-200' : 'text-zinc-500'}`}>
                    <span>{step.label}</span>
                    <span className="h-[1px] flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-zinc-300">{step.body}</p>
                  <ul className="mt-6 grid gap-3 text-sm text-zinc-300">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      {process.env.NODE_ENV !== 'production' && (
        <div className="fixed bottom-4 right-4 z-50 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-xs text-white">
          Active step: {activeIndex + 1}
        </div>
      )}
    </>
  );
}
