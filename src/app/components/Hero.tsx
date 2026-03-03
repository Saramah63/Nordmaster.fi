import { ArrowUpRight, ShieldCheck, Sparkles, Ruler } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f6f2] pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute top-1/2 -left-28 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-600">
              <Sparkles size={14} />
              {t('hero.badge')}
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl text-slate-900 leading-[1.05]">
              {t('hero.title1')} <span className="text-slate-500">{t('hero.title2')}</span>
              <span className="block text-slate-900">{t('hero.title3')}</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white text-sm font-medium hover:bg-slate-800"
              >
                {t('hero.cta.quote')}
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-slate-700 text-sm font-medium hover:border-slate-400"
              >
                {t('hero.cta.projects')}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg text-sm text-slate-600">
              <div>
                <div className="text-2xl font-semibold text-slate-900">10+</div>
                <div>{t('hero.stat1')}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">200+</div>
                <div>{t('hero.stat2')}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">{t('common.quality')}</div>
                <div>{t('hero.stat3')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-slate-200 bg-white shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
                alt="Modern construction"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="absolute -left-8 -bottom-8 w-64 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">{t('about.feature2.title')}</div>
                  <div className="text-base font-semibold text-slate-900">{t('about.feature2.desc')}</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-12 w-56 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-500/90 text-white flex items-center justify-center">
                  <Ruler size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">{t('service.planning.title')}</div>
                  <div className="text-base font-semibold text-slate-900">{t('service.planning.desc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
