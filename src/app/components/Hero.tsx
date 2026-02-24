import { ArrowRight, Award, Clock, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580063665421-4c9cbe9ec11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwRmlubGFuZCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MTgzNTgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction site"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            {t('hero.title1')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              {t('hero.title2')}
            </span>
            <span className="block">{t('hero.title3')}</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl">
            {t('hero.description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl group font-semibold text-lg"
            >
              {t('hero.cta.quote')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all font-semibold text-lg"
            >
              {t('hero.cta.projects')}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <div className="text-4xl font-bold text-white">10+</div>
              </div>
              <div className="text-sm text-slate-400">{t('hero.stat1')}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <ThumbsUp className="w-5 h-5 text-amber-400" />
                <div className="text-4xl font-bold text-white">100%</div>
              </div>
              <div className="text-sm text-slate-400">{t('hero.stat2')}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div className="text-4xl font-bold text-white">{t('common.quality')}</div>
              </div>
              <div className="text-sm text-slate-400">{t('hero.stat3')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}