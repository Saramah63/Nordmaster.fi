import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: 'project.1.title',
      categoryKey: 'project.1.category',
      descKey: 'project.1.desc',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titleKey: 'project.2.title',
      categoryKey: 'project.2.category',
      descKey: 'project.2.desc',
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titleKey: 'project.3.title',
      categoryKey: 'project.3.category',
      descKey: 'project.3.desc',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titleKey: 'project.4.title',
      categoryKey: 'project.4.category',
      descKey: 'project.4.desc',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titleKey: 'project.5.title',
      categoryKey: 'project.5.category',
      descKey: 'project.5.desc',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titleKey: 'project.6.title',
      categoryKey: 'project.6.category',
      descKey: 'project.6.desc',
      image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-[#f7f6f2]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              {t('projects.label')}
            </div>
            <h2 className="text-4xl md:text-6xl text-slate-900">
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-xl">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
            <img
              src={projects[0].image}
              alt={t(projects[0].titleKey)}
              className="h-[520px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs uppercase tracking-[0.4em] text-white/80">{t(projects[0].categoryKey)}</span>
              <h3 className="text-3xl mt-2">{t(projects[0].titleKey)}</h3>
              <p className="mt-3 text-slate-100">{t(projects[0].descKey)}</p>
            </div>
          </div>

          <div className="grid gap-6">
            {projects.slice(1, 4).map((project, index) => (
              <div key={index} className="flex gap-5 rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="h-24 w-24 rounded-2xl object-cover"
                />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{t(project.categoryKey)}</div>
                  <h3 className="text-xl text-slate-900 mt-2">{t(project.titleKey)}</h3>
                  <p className="text-sm text-slate-600 mt-2">{t(project.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(3).map((project, index) => (
            <div key={index} className="rounded-[24px] overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <img src={project.image} alt={t(project.titleKey)} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{t(project.categoryKey)}</div>
                <h3 className="text-xl text-slate-900 mt-2">{t(project.titleKey)}</h3>
                <p className="text-sm text-slate-600 mt-2">{t(project.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-left">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white text-sm font-medium"
          >
            {t('projects.cta.button')}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
