import { Building2, Home, Wrench, PaintBucket, Hammer, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Building2, titleKey: 'service.fabrication.title', descKey: 'service.fabrication.desc' },
    { icon: Home, titleKey: 'service.welding.title', descKey: 'service.welding.desc' },
    { icon: Wrench, titleKey: 'service.structures.title', descKey: 'service.structures.desc' },
    { icon: PaintBucket, titleKey: 'service.stairs.title', descKey: 'service.stairs.desc' },
    { icon: Hammer, titleKey: 'service.custom.title', descKey: 'service.custom.desc' },
    { icon: ClipboardCheck, titleKey: 'service.installation.title', descKey: 'service.installation.desc' },
    { icon: ClipboardCheck, titleKey: 'service.design.title', descKey: 'service.design.desc' },
    { icon: ClipboardCheck, titleKey: 'service.maintenance.title', descKey: 'service.maintenance.desc' },
    { icon: ClipboardCheck, titleKey: 'service.consulting.title', descKey: 'service.consulting.desc' },
    { icon: ClipboardCheck, titleKey: 'service.planning.title', descKey: 'service.planning.desc' },
    { icon: ClipboardCheck, titleKey: 'service.execution.title', descKey: 'service.execution.desc' },
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
      </div>
    </section>
  );
}
