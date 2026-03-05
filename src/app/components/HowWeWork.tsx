import { ClipboardList, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function HowWeWork() {
  const { t } = useLanguage();
  const steps = [
    { icon: ClipboardList, title: t('how.step1.title'), desc: t('how.step1.desc') },
    { icon: FileText, title: t('how.step2.title'), desc: t('how.step2.desc') },
    { icon: CheckCircle, title: t('how.step3.title'), desc: t('how.step3.desc') },
  ];

  return (
    <section id="process" className="bg-zinc-950 text-white py-14 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold text-zinc-400 tracking-[0.4em] uppercase mb-4">
            {t('how.label')}
          </div>
          <h2 className="sectionTitle text-3xl md:text-4xl font-semibold">{t('how.heading')}</h2>
          <p className="bodyText mt-2">{t('how.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-amber-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="bodyText text-sm">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
