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
      })),
    [steps]
  );

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
      <div className="lg:sticky lg:top-28 h-max">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">Progress</div>
          <div className="text-sm text-zinc-200">
            {String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
          </div>
        </div>
        <div className="relative">
          <StickyMedia items={mediaItems} activeIndex={activeIndex} />
          <div className="hidden lg:block absolute -right-6 top-4 w-[2px] h-[80%] bg-white/10">
            <div
              className="absolute left-0 w-full bg-amber-400 transition-all duration-500"
              style={{ height: `${((activeIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <section
              key={step.id}
              id={step.id}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className={`rounded-3xl border transition-all duration-300 px-6 py-8 md:px-8 ${
                isActive
                  ? 'border-amber-400/40 bg-white/5 shadow-xl shadow-black/40'
                  : 'border-white/10 bg-transparent'
              }`}
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
                <span>{step.label}</span>
                <span className="h-[1px] flex-1 bg-white/10" />
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-zinc-300">{step.body}</p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-300">
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
  );
}
