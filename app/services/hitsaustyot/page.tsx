'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  HardHat,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Mail,
} from 'lucide-react';
import { Section } from '@/components/Section';

const OFFER_ITEMS = [
  {
    title: 'On-site welding teams',
    description: 'Certified welders and supervisors ready for industrial sites and tight schedules.',
  },
  {
    title: 'Flexible duration',
    description: 'Short-term shutdowns or long-term workforce rental based on project needs.',
  },
  {
    title: 'Compliance & documentation',
    description: 'Safety-first methods, work permits, and reporting aligned with Finnish regulations.',
  },
  {
    title: 'Fast start',
    description: 'Rapid mobilization with clear scope definition and transparent pricing.',
  },
  {
    title: 'Coordination support',
    description: 'We integrate with your site managers and project leads from day one.',
  },
  {
    title: 'Quality control',
    description: 'Visual inspections and continuous quality follow-up during execution.',
  },
];

const SERVICE_BULLETS = [
  'MIG, MAG, and TIG welding for structural steel and fabrication',
  'Workshop and on-site welding for industrial facilities',
  'Steel structures, stairs, railings, platforms, and custom assemblies',
  'Work permits, safety plans, and documentation included',
  'Scheduled maintenance, repairs, and shutdown support',
];

const COVERAGE = [
  {
    region: 'Southwest Finland',
    cities: ['Turku', 'Raisio', 'Naantali', 'Kaarina', 'Lieto', 'Salo'],
  },
  {
    region: 'Satakunta',
    cities: ['Pori', 'Rauma', 'Ulvila', 'Nakkila', 'Harjavalta'],
  },
  {
    region: 'Other regions on request',
    cities: ['Uusimaa', 'Pirkanmaa', 'Kanta-Hame', 'Ostrobothnia'],
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
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <span className="font-semibold">N</span>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.4em] text-slate-400">Nordmaster Group</div>
                <div className="text-lg font-semibold">Hitsaustyot</div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
              <a className="hover:text-white" href="#home">Home</a>
              <a className="hover:text-white" href="#services">Services</a>
              <a className="hover:text-white" href="#projects">Projects</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-950 px-4 py-2 text-sm font-semibold shadow-lg shadow-amber-500/30 hover:bg-amber-300"
            >
              Request an offer
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute top-24 right-0 h-[420px] w-[420px] rounded-full bg-slate-700/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-[260px] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)', backgroundSize: '26px 26px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-200">
              <Sparkles size={14} />
              Welding Services
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
              Industrial Welding Workforce for Demanding Projects
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Nordmaster Group delivers certified welding teams for steel structures, repairs, and on-site fabrication. Fast mobilization, safety-first execution, and clear reporting for Finnish industry.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 text-slate-950 px-6 py-3 text-sm font-semibold shadow-lg shadow-amber-500/30"
              >
                Request offer
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+358406887988"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold"
              >
                Call now
                <Phone size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Clock size={14} />
                Fast response
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-2">
                <ShieldCheck size={14} />
                Safety-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <HardHat size={14} />
                On-site ready
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="services"
        eyebrow="Service overview"
        title="Professional welding services for industrial sites"
        description="We support factories, shipyards, and construction sites with qualified welding crews, clear documentation, and flexible delivery."
        className="bg-slate-950"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div className="space-y-6 text-slate-300">
            <p>
              Our welding specialists operate with strict safety procedures, reliable scheduling, and on-site coordination. We handle both planned projects and urgent repairs with the same focus on quality.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">What the service includes</h3>
              <ul className="space-y-3">
                {SERVICE_BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 text-emerald-300" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-slate-400">Service scope</div>
                <h3 className="mt-3 text-2xl font-semibold">Project-ready teams</h3>
              </div>
              <BadgeCheck className="text-emerald-300" />
            </div>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Building2 size={18} />
                On-site welding for steel structures and assemblies
              </div>
              <div className="flex items-center gap-3">
                <Users size={18} />
                Dedicated supervisors and reporting with your site managers
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} />
                Safety documentation, permits, and compliance support
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="offers"
        eyebrow="We offer"
        title="Flexible workforce services"
        description="Scale up quickly with vetted welders and project support tailored to your site." 
        className="bg-slate-950"
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {OFFER_ITEMS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/40">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <ChevronRight className="text-slate-500" size={18} />
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Representative welding work"
        description="Industrial welding crews ready for shutdowns, repairs, and new installations." 
        className="bg-slate-950"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Production hall repairs',
              copy: 'Rapid response welding and structural reinforcement during planned shutdown.',
            },
            {
              title: 'Steel structure installation',
              copy: 'On-site welding with full safety documentation and compliance follow-up.',
            },
            {
              title: 'Custom fabrication support',
              copy: 'Coordination with workshops and site supervisors to deliver on schedule.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="coverage"
        eyebrow="Coverage areas"
        title="Operating across Southwest Finland & Satakunta"
        description="We mobilize teams quickly in key industrial regions. Other areas on request."
        className="bg-slate-950"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {COVERAGE.map((area) => (
            <div key={area.region} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-amber-500/10 p-6">
              <div className="flex items-center gap-2 text-white font-semibold">
                <MapPin size={16} />
                {area.region}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.cities.map((city) => (
                  <span key={city} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-amber-200">Need service support?</div>
              <h3 className="mt-3 text-3xl font-semibold">Get a welding team on site fast</h3>
              <p className="mt-3 text-slate-300">Reach out now. We respond quickly with availability and a clear plan.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-950 px-6 py-3 text-sm font-semibold shadow-lg shadow-amber-500/30">
                Request an offer
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

      <Section
        id="contact"
        eyebrow="Contact"
        title="Talk to our welding coordinators"
        description="We answer fast and keep communication clear during the entire project."
        className="bg-slate-950"
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-6">
            {CONTACTS.map((contact) => (
              <div key={contact.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-slate-400">Contact person</div>
                <div className="mt-2 text-xl font-semibold text-white">{contact.name}</div>
                <div className="mt-2 text-slate-300">{contact.phone}</div>
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
              <div className="text-sm text-slate-400">Email</div>
              <div className="mt-2 text-lg font-semibold text-white">support@nordmastergroup.com</div>
              <a
                href="mailto:support@nordmastergroup.com"
                className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300"
              >
                <Mail size={14} />
                Send email
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-amber-500/20 bg-white/5 p-8 shadow-2xl shadow-black/50">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Phone (optional)</label>
              <input
                name="phone"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                placeholder="+358"
              />
            </div>
            <div className="mt-4">
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
                placeholder="Tell us about your welding needs"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 text-slate-950 px-6 py-3 text-sm font-semibold shadow-lg shadow-amber-500/30"
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
      </Section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
