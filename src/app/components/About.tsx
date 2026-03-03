import { CheckCircle2, Award, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <div>
            <div className="text-sm font-semibold text-slate-700 tracking-wider uppercase mb-4">
              {t('about.label')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              <strong>Nordmaster Group Oy</strong> {t('about.p1')}
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t('about.p2')}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-slate-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">{t('about.feature1.title')}</h4>
                  <p className="text-slate-600">{t('about.feature1.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-slate-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">{t('about.feature2.title')}</h4>
                  <p className="text-slate-600">{t('about.feature2.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-slate-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">{t('about.feature3.title')}</h4>
                  <p className="text-slate-600">{t('about.feature3.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501880622860-e1be39410ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWxkaW5nJTIwbWV0YWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrfGVufDF8fHx8MTc3MjU1NjM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Metal welding work"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={28} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">200+</div>
                  <div className="text-slate-600">{t('hero.stat2')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors">
            <div className="text-5xl font-bold text-slate-900 mb-2">10+</div>
            <div className="text-slate-600 font-medium">{t('about.stat1')}</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors">
            <div className="text-5xl font-bold text-slate-900 mb-2">200+</div>
            <div className="text-slate-600 font-medium">{t('about.stat2')}</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors">
            <div className="text-5xl font-bold text-slate-900 mb-2">100%</div>
            <div className="text-slate-600 font-medium">{t('about.stat3')}</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-slate-100 transition-colors">
            <div className="text-5xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-slate-600 font-medium">{t('about.stat4')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
