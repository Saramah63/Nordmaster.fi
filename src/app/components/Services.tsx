import { Building2, Home, Wrench, PaintBucket, Hammer, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Building2, titleKey: 'service.newbuild.title', descKey: 'service.newbuild.desc' },
    { icon: Home, titleKey: 'service.renovation.title', descKey: 'service.renovation.desc' },
    { icon: Wrench, titleKey: 'service.maintenance.title', descKey: 'service.maintenance.desc' },
    { icon: PaintBucket, titleKey: 'service.painting.title', descKey: 'service.painting.desc' },
    { icon: Hammer, titleKey: 'service.carpentry.title', descKey: 'service.carpentry.desc' },
    { icon: ClipboardCheck, titleKey: 'service.management.title', descKey: 'service.management.desc' },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-end mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              {t('services.label')}
            </div>
            <h2 className="text-4xl md:text-6xl text-slate-900">
              {t('services.title')}
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-xl">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-[#f7f6f2] p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">{t(service.titleKey)}</h3>
                <p className="text-slate-600 leading-relaxed">{t(service.descKey)}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-lg">
            <div className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              {t('service.planning.title')}
            </div>
            <h3 className="text-3xl text-slate-900 mb-4">{t('service.execution.title')}</h3>
            <p className="text-slate-600 mb-6">{t('service.planning.desc')}</p>
            <a href="#projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
              {t('projects.label')}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-900 text-white p-10 shadow-xl">
            <div className="text-xs uppercase tracking-[0.4em] text-slate-300 mb-4">
              {t('service.management.title')}
            </div>
            <h3 className="text-3xl mb-4">{t('service.execution.title')}</h3>
            <p className="text-slate-300 mb-6">{t('service.execution.desc')}</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white">
              {t('contact.label')}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
