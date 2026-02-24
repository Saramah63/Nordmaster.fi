import { Phone, Mail, MapPin, Building2, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-none">Nordmaster Group</span>
                <span className="text-xs text-slate-500">{t('company.tagline')}</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Building2 size={16} />
              <span>Y-tunnus: 3526474-3</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  {t('service.newbuild.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  {t('service.renovation.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  {t('service.maintenance.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  {t('service.painting.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  {t('service.carpentry.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  {t('service.management.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  {t('footer.references')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  {t('footer.getquote')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <a href="tel:+358XXXXXXXX" className="text-slate-400 hover:text-white transition-colors block">
                    +358 XX XXX XXXX
                  </a>
                  <span className="text-xs text-slate-500">{t('contact.phone.hours')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@nordmaster.fi" className="text-slate-400 hover:text-white transition-colors">
                  info@nordmaster.fi
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-slate-400">{t('contact.location.area')}</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-500">
              {t('footer.copyright')}
            </p>
            <p className="text-slate-600">
              {t('footer.legal')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
