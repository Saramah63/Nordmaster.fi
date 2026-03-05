'use client';

import { ArrowRight, Mail, Phone } from 'lucide-react';
import { ScrollSteps } from '@/components/ScrollSteps';

const STEPS = [
  {
    id: 'step-1',
    label: 'ON-SITE READY',
    title: 'Certified welding teams for demanding projects',
    body: 'Nordmaster Group provides reliable welding workforce for steel structures, repairs, and on-site fabrication—built for industrial schedules and clear delivery.',
    bullets: [
      'MIG / MAG / TIG welding for structural steel',
      'Repairs, installations, and fabrication support',
      'Site-ready onboarding and fast start',
    ],
    image: '/images/metal/welding-01.jpg',
    alt: 'Welding workforce on site',
    overlayLabel: 'Welding workforce',
    caption: 'Teams that integrate fast into your site workflow.',
  },
  {
    id: 'step-2',
    label: 'SAFETY & COMPLIANCE',
    title: 'Safety-first execution and clean documentation',
    body: 'We operate with strict safety practices and transparent reporting so your site stays compliant and predictable.',
    bullets: [
      'PPE-ready and aligned with site requirements',
      'Work permits and safety procedures followed',
      'Clear progress updates for supervisors',
    ],
    image: '/images/metal/welding-02.jpg',
    alt: 'Safety-first welding operation',
    overlayLabel: 'Safety-first',
    caption: 'Compliance-driven work, zero surprises.',
  },
  {
    id: 'step-3',
    label: 'FLEXIBLE DELIVERY',
    title: 'Short-term support or long-term staffing',
    body: 'Scale workforce up or down based on workload—without slowing down delivery.',
    bullets: [
      'Workforce rental for peaks and deadlines',
      'Long-term staffing for stable throughput',
      'Transparent scope and scheduling',
    ],
    image: '/images/metal/welding-03.jpg',
    alt: 'Flexible welding staffing',
    overlayLabel: 'Flexible staffing',
    caption: 'Right people, right time, right duration.',
  },
  {
    id: 'step-4',
    label: 'FAST RESPONSE',
    title: 'Request → offer → start on-site',
    body: 'Send your request and we confirm availability, pricing, and next steps quickly.',
    bullets: [
      'Quick availability check',
      'Clear offer and start date',
      'Direct contacts—no friction',
    ],
    image: '/images/metal/welding-04.jpg',
    alt: 'Fast response for welding projects',
    overlayLabel: 'Get an offer',
    caption: 'Move from request to action—fast.',
  },
];

export default function HitsaustyotPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-40 bg-zinc-950/85 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-zinc-500">Nordmaster Group</div>
              <div className="text-lg font-semibold">Welding Workforce</div>
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
              <a className="hover:text-white" href="#home">Home</a>
              <a className="hover:text-white" href="#scrolly">Services</a>
              <a className="hover:text-white" href="#cta">Contact</a>
            </nav>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <a href="tel:+358406887988" className="hover:text-white">+358 40 688 7988</a>
              <a href="tel:+358406206846" className="hover:text-white">+358 40 620 6846</a>
              <a href="mailto:support@nordmastergroup.com" className="hover:text-white">support@nordmastergroup.com</a>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-zinc-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-amber-500/30"
            >
              Request an offer
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-zinc-300">
              Welding support
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold">Premium on-site welding workforce</h1>
            <p className="mt-5 text-lg text-zinc-300">
              Certified teams, safety-first execution, and clear reporting for industrial schedules in Finland.
            </p>
          </div>
        </div>
      </section>

      <section id="scrolly" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-400">Service flow</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold">Scrollytelling service delivery</h2>
            <p className="mt-4 text-zinc-300 max-w-3xl">
              Scroll the steps to see how the media panel changes and the active step highlights.
            </p>
          </div>
          <ScrollSteps steps={STEPS} />
        </div>
      </section>

      <section id="cta" className="py-16 bg-amber-400 text-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-zinc-700">Need welding workforce on-site?</div>
              <h3 className="mt-3 text-3xl font-semibold">Call directly or email your project scope. We respond fast.</h3>
              <p className="mt-4 text-zinc-800">
                Aigars Cerpinskis — +358 40 688 7988
                <br />
                Martins Cerpinskis — +358 40 620 6846
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+358406887988" className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 text-white px-6 py-3 text-sm font-semibold">
                Call Aigars
                <Phone size={16} />
              </a>
              <a href="tel:+358406206846" className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold">
                Call Martins
                <Phone size={16} />
              </a>
              <a href="mailto:support@nordmastergroup.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold">
                Email
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>© 2026 Nordmaster Group. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#cta">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
