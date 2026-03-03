import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { nameKey: 'testimonial1.name', roleKey: 'testimonial1.role', textKey: 'testimonial1.text' },
    { nameKey: 'testimonial2.name', roleKey: 'testimonial2.role', textKey: 'testimonial2.text' },
    { nameKey: 'testimonial3.name', roleKey: 'testimonial3.role', textKey: 'testimonial3.text' },
  ];

  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-slate-400 mb-4">
              {t('testimonials.label')}
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              {t('testimonials.title')}
            </h2>
          </div>
          <p className="text-lg text-slate-300 max-w-xl">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-[24px] border border-slate-800 bg-slate-800/70 p-8">
              <div className="flex items-center justify-between mb-6">
                <Quote className="text-amber-300" size={24} />
                <div className="text-xs uppercase tracking-[0.4em] text-slate-400">Client</div>
              </div>
              <p className="text-slate-200 leading-relaxed mb-6">"{t(testimonial.textKey)}"</p>
              <div className="border-t border-slate-700 pt-5">
                <div className="text-white font-semibold">{t(testimonial.nameKey)}</div>
                <div className="text-sm text-slate-400">{t(testimonial.roleKey)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
