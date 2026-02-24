import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      nameKey: 'testimonial1.name',
      roleKey: 'testimonial1.role',
      textKey: 'testimonial1.text',
      rating: 5
    },
    {
      nameKey: 'testimonial2.name',
      roleKey: 'testimonial2.role',
      textKey: 'testimonial2.text',
      rating: 5
    },
    {
      nameKey: 'testimonial3.name',
      roleKey: 'testimonial3.role',
      textKey: 'testimonial3.text',
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="text-sm font-semibold text-amber-400 tracking-wider uppercase mb-4">
            {t('testimonials.label')}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-slate-900" size={24} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                "{t(testimonial.textKey)}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-700 pt-6">
                <div className="font-bold text-white text-lg">{t(testimonial.nameKey)}</div>
                <div className="text-slate-400 text-sm">{t(testimonial.roleKey)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
