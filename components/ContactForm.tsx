'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    phone: string;
    message: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderPhone: string;
    placeholderMessage: string;
    submit: string;
    success: string;
    errorMissing: string;
    errorServer: string;
    errorGeneric: string;
  };
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactForm({ labels }: ContactFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const onChange = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setError(null);

    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setError(labels.errorMissing);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus('error');
        if (data.error === 'SERVER_NOT_CONFIGURED') {
          setError(labels.errorServer);
        } else {
          setError(data.error || labels.errorGeneric);
        }
        return;
      }

      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setError(labels.errorGeneric);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/15 bg-white/[0.08] p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">
          {labels.name}
          <input
            value={form.name}
            onChange={onChange('name')}
            className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white"
            placeholder={labels.placeholderName}
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          {labels.email}
          <input
            type="email"
            value={form.email}
            onChange={onChange('email')}
            className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white"
            placeholder={labels.placeholderEmail}
            required
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm text-zinc-300">
        {labels.phone}
        <input
          value={form.phone}
          onChange={onChange('phone')}
          className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white"
          placeholder={labels.placeholderPhone}
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm text-zinc-300">
        {labels.message}
        <textarea
          value={form.message}
          onChange={onChange('message')}
          className="min-h-[140px] rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white"
          placeholder={labels.placeholderMessage}
          required
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950"
        >
          {status === 'loading' && <Loader2 className="animate-spin" size={16} />}
          {labels.submit}
        </button>
        {status === 'success' && <span className="text-sm text-emerald-300">{labels.success}</span>}
        {status === 'error' && <span className="text-sm text-red-300">{error || labels.errorGeneric}</span>}
      </div>
    </form>
  );
}
