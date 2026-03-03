import { Hammer, Cog, Building, MoveVertical, Package, Settings, Ruler, Wrench, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Hammer,
      titleKey: 'service.fabrication.title',
      descKey: 'service.fabrication.desc'
    },
    {
      icon: Cog,
      titleKey: 'service.welding.title',
      descKey: 'service.welding.desc'
    },
    {
      icon: Building,
      titleKey: 'service.structures.title',
      descKey: 'service.structures.desc'
    },
    {
      icon: MoveVertical,
      titleKey: 'service.stairs.title',
      descKey: 'service.stairs.desc'
    },
    {
      icon: Package,
      titleKey: 'service.custom.title',
      descKey: 'service.custom.desc'
    },
    {
      icon: Settings,
      titleKey: 'service.installation.title',
      descKey: 'service.installation.desc'
    },
    {
      icon: Ruler,
      titleKey: 'service.design.title',
      descKey: 'service.design.desc'
    },
    {
      icon: Wrench,
      titleKey: 'service.maintenance.title',
      descKey: 'service.maintenance.desc'
    },
    {
      icon: HelpCircle,
      titleKey: 'service.consulting.title',
      descKey: 'service.consulting.desc'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-sm font-semibold text-slate-700 tracking-wider uppercase mb-4">
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
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-400"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
              src="https://images.unsplash.com/photo-1722971334403-4f02388455a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmclMjB3b3JrfGVufDF8fHx8MTc3MjU0NzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              src="https://images.unsplash.com/photo-1501880622860-e1be39410ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwbWV0YWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrfGVufDF8fHx8MTc3MjU1NjM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Metal welding work"
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
