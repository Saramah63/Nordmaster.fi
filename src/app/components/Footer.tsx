import { Phone, Mail, MapPin, Building2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <div className="text-white font-semibold">Nordmaster Group</div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{t('company.tagline')}</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">{t('footer.description')}</p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Building2 size={16} />
              <span>Y-tunnus: 3526474-3</span>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase tracking-[0.4em] mb-5">{t('footer.services')}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white">{t('service.newbuild.title')}</a></li>
              <li><a href="#services" className="hover:text-white">{t('service.renovation.title')}</a></li>
              <li><a href="#services" className="hover:text-white">{t('service.maintenance.title')}</a></li>
              <li><a href="#services" className="hover:text-white">{t('service.painting.title')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase tracking-[0.4em] mb-5">{t('footer.company')}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white">{t('footer.about')}</a></li>
              <li><a href="#projects" className="hover:text-white">{t('footer.references')}</a></li>
              <li><a href="#contact" className="hover:text-white">{t('footer.contact')}</a></li>
              <li><a href="#contact" className="hover:text-white">{t('footer.getquote')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase tracking-[0.4em] mb-5">{t('footer.contact')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-slate-400 mt-1" />
                <div>
                  <a href="tel:+358XXXXXXXX" className="hover:text-white block">+358 XX XXX XXXX</a>
                  <span className="text-xs text-slate-500">{t('contact.phone.hours')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-slate-400 mt-1" />
                <a href="mailto:info@nordmaster.fi" className="hover:text-white">info@nordmaster.fi</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-400 mt-1" />
                <span>{t('contact.location.area')}</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 rounded-full border border-slate-700 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 hover:border-slate-500"
            >
              {t('footer.getquote')}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.legal')}</span>
        </div>
      </div>
    </footer>
  );
}
