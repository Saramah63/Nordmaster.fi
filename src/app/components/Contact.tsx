import { Phone, Mail, Copy, Check, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('support@nordmastergroup.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setMessage(t('contact.form.error'));
      return;
    }

    try {
      setStatus('loading');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok && data.ok) {
        setStatus('success');
        setMessage(t('contact.form.success'));
        event.currentTarget.reset();
        return;
      }
    } catch {
      // fall through to mailto fallback
    }

    const subject = encodeURIComponent(`Nordmaster Group — ${payload.name}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || '-'}\n\nMessage:\n${payload.message}`
    );
    window.location.href = `mailto:support@nordmastergroup.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setMessage(t('contact.form.fallback'));
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950 text-white">
      <div className="container mx-auto relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <div className="text-xs font-semibold text-zinc-400 tracking-[0.4em] uppercase mb-4">
              {t('contact.label')}
            </div>
            <h2 className="sectionTitle text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="bodyText text-xl leading-relaxed mb-10">
              {t('contact.description')}
            </p>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Phone size={18} />
                  {t('contact.person1')}
                </div>
                <div className="mt-2 text-zinc-300">+358 40 688 7988</div>
                <a
                  href="tel:+358406887988"
                  className="ctaButton mt-4 inline-flex items-center gap-2 text-xs"
                >
                  {t('contact.call')}
                </a>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <Phone size={18} />
                  {t('contact.person2')}
                </div>
                <div className="mt-2 text-zinc-300">+358 40 620 6846</div>
                <a
                  href="tel:+358406206846"
                  className="ctaButton mt-4 inline-flex items-center gap-2 text-xs"
                >
                  {t('contact.call')}
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:support@nordmastergroup.com"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-sm font-semibold text-white pointer-events-auto"
                >
                  <Mail size={18} />
                  support@nordmastergroup.com
                </a>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-white hover:border-white/40"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? t('contact.email.copied') : t('contact.email.copy')}
                  </button>
                  <span>{t('contact.email.helper')}</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-4">{t('contact.form.title')}</h3>
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-200 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none"
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-200 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-zinc-200 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none"
                  placeholder={t('contact.form.phone.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-zinc-200 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none"
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>
            </div>
            {message && (
              <div
                className={`mt-4 text-sm ${
                  status === 'success' ? 'text-emerald-300' : 'text-rose-300'
                }`}
              >
                {message}
              </div>
            )}
            <button
              type="submit"
              className="ctaButton mt-6 inline-flex items-center gap-2 text-sm"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
