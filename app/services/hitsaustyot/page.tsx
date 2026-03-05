'use client';

import { useState } from 'react';
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

const CONTACTS = [
  {
    name: 'Aigars Cerpinskis',
    phone: '+358 40 688 7988',
    tel: 'tel:+358406887988',
  },
  {
    name: 'Martins Cerpinskis',
    phone: '+358 40 620 6846',
    tel: 'tel:+358406206846',
  },
];

export default function HitsaustyotPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send');
      }

      setStatus('sent');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send');
    }
  }

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

      <section id="home" className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute top-12 right-0 h-[420px] w-[420px] rounded-full bg-zinc-700/40 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-zinc-300">
              Welding support
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold">Premium on-site welding workforce</h1>
            <p className="mt-5 text-lg text-zinc-300">
              Industrial welding support with certified teams, safety-first execution, and clear reporting. Nordmaster Group keeps your site compliant and productive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-zinc-950 px-6 py-3 text-sm font-semibold shadow-lg shadow-amber-500/30">
                Request offer
                <ArrowRight size={16} />
              </a>
              <a href="tel:+358406887988" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
                Call Aigars
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="scrolly" className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-400">Service flow</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold">Scrollytelling service delivery</h2>
            <p className="mt-4 text-zinc-300 max-w-3xl">
              Scroll to see how we deliver welding workforce step-by-step. The active step highlights and the media panel updates as you move.
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

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-zinc-400">Direct contact</div>
                <h3 className="mt-4 text-3xl font-semibold">Talk to our coordinators</h3>
                <p className="mt-4 text-zinc-300">
                  We answer quickly and keep communication clear during your project.
                </p>
              </div>

              {CONTACTS.map((contact) => (
                <div key={contact.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-zinc-400">Contact person</div>
                  <div className="mt-2 text-xl font-semibold text-white">{contact.name}</div>
                  <div className="mt-2 text-zinc-300">{contact.phone}</div>
                  <a
                    href={contact.tel}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold"
                  >
                    Call now
                    <Phone size={14} />
                  </a>
                </div>
              ))}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-zinc-400">Email</div>
                <div className="mt-2 text-lg font-semibold text-white">support@nordmastergroup.com</div>
                <a
                  href="mailto:support@nordmastergroup.com"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300"
                >
                  <Mail size={14} />
                  Send email
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-zinc-400">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-zinc-400">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.3em] text-zinc-400">Phone (optional)</label>
                <input
                  name="phone"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white"
                  placeholder="+358"
                />
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.3em] text-zinc-400">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white"
                  placeholder="Tell us about your welding needs"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 text-zinc-950 px-6 py-3 text-sm font-semibold"
              >
                {status === 'sending' ? 'Sending...' : 'Request an offer'}
                <ArrowRight size={16} />
              </button>
              {status === 'sent' && (
                <div className="mt-4 text-sm text-emerald-300">Thank you. We will contact you shortly.</div>
              )}
              {status === 'error' && (
                <div className="mt-4 text-sm text-rose-300">{errorMessage || 'Something went wrong.'}</div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>© 2026 Nordmaster Group. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
