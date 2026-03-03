import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      titleKey: 'project.1.title',
      categoryKey: 'project.1.category',
      descKey: 'project.1.desc',
      image: 'https://images.unsplash.com/photo-1679430786992-8bb54d023e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyNTQzOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      titleKey: 'project.2.title',
      categoryKey: 'project.2.category',
      descKey: 'project.2.desc',
      image: 'https://images.unsplash.com/photo-1634981513372-c6523ab3e005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHN0YWlycyUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NzI1NTYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      titleKey: 'project.3.title',
      categoryKey: 'project.3.category',
      descKey: 'project.3.desc',
      image: 'https://images.unsplash.com/photo-1711174483420-d60649a7924f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHJhaWxpbmclMjBmZW5jZXxlbnwxfHx8fDE3NzI1NTYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      titleKey: 'project.4.title',
      categoryKey: 'project.4.category',
      descKey: 'project.4.desc',
      image: 'https://images.unsplash.com/photo-1600965581129-eef8a214ec9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW0lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyNTE4OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      titleKey: 'project.5.title',
      categoryKey: 'project.5.category',
      descKey: 'project.5.desc',
      image: 'https://images.unsplash.com/photo-1771337742731-91a885ccfc5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwc3RlZWwlMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyNTU2MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      titleKey: 'project.6.title',
      categoryKey: 'project.6.category',
      descKey: 'project.6.desc',
      image: 'https://images.unsplash.com/photo-1693823462803-8921d3f5ea2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdvcmtzaG9wJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI1NTcxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-sm font-semibold text-slate-700 tracking-wider uppercase mb-4">
            {t('projects.label')}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('projects.description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-slate-800/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                    {t(project.categoryKey)}
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="text-slate-900" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-slate-600">
                  {t(project.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6 text-lg">
            {t('projects.cta.question')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            {t('projects.cta.button')}
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
