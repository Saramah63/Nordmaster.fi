import { Building2, Home, Wrench, PaintBucket, Hammer, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Building2,
      titleKey: 'service.newbuild.title',
      descKey: 'service.newbuild.desc'
    },
    {
      icon: Home,
      titleKey: 'service.renovation.title',
      descKey: 'service.renovation.desc'
    },
    {
      icon: Wrench,
      titleKey: 'service.maintenance.title',
      descKey: 'service.maintenance.desc'
    },
    {
      icon: PaintBucket,
      titleKey: 'service.painting.title',
      descKey: 'service.painting.desc'
    },
    {
      icon: Hammer,
      titleKey: 'service.carpentry.title',
      descKey: 'service.carpentry.desc'
    },
    {
      icon: ClipboardCheck,
      titleKey: 'service.management.title',
      descKey: 'service.management.desc'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-sm font-semibold text-amber-600 tracking-wider uppercase mb-4">
            {t('services.label')}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Service Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1721244653693-1d13e68b66c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnQlMjBwbGFufGVufDF8fHx8MTc3MTgzNTk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Construction planning"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-3">{t('service.planning.title')}</h3>
              <p className="text-slate-200">
                {t('service.planning.desc')}
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1770152626760-3e9f5c59d71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwcHJvamVjdHxlbnwxfHx8fDE3NzE4MzU5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Construction work"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-3">{t('service.execution.title')}</h3>
              <p className="text-slate-200">
                {t('service.execution.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
