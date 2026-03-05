import { Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-none">Nordmaster Group</span>
                <span className="text-xs text-zinc-500">{t('company.tagline')}</span>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">{t('footer.description')}</p>
            <a
              href="#contact"
              className="ctaButton inline-flex items-center gap-2 text-sm"
            >
              {t('footer.getquote')}
              <ArrowRight size={16} />
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-300" />
                <a href="tel:+358406887988" className="hover:text-white transition-colors">
                  Aigars Cerpinskis — +358 40 688 7988
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-300" />
                <a href="tel:+358406206846" className="hover:text-white transition-colors">
                  Martins Cerpinskis — +358 40 620 6846
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-300" />
                <a href="mailto:support@nordmastergroup.com" className="hover:text-white transition-colors">
                  support@nordmastergroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-zinc-500">© 2026 Nordmaster Group</div>
      </div>
    </footer>
  );
}
