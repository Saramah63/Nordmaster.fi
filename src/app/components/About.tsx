import { CheckCircle2, Shield, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              {t('about.label')}
            </div>
            <h2 className="text-4xl md:text-6xl text-slate-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">Nordmaster Group Oy</strong> {t('about.p1')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {t('about.p2')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{t('about.feature1.title')}</h3>
                <p className="text-sm text-slate-600">{t('about.feature1.desc')}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                  <Shield size={18} />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{t('about.feature2.title')}</h3>
                <p className="text-sm text-slate-600">{t('about.feature2.desc')}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                  <Trophy size={18} />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{t('about.feature3.title')}</h3>
                <p className="text-sm text-slate-600">{t('about.feature3.desc')}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                  <Users size={18} />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{t('hero.stat2')}</h3>
                <p className="text-sm text-slate-600">{t('about.stat2')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-slate-200 bg-white shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                alt="Construction professionals"
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-10 right-10 rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-semibold text-slate-900">10+</div>
                  <div className="text-sm text-slate-500">{t('about.stat1')}</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-slate-900">200+</div>
                  <div className="text-sm text-slate-500">{t('about.stat2')}</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">{t('about.stat3')}</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-500">{t('about.stat4')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
