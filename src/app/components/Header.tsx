import { Menu, X, Phone, Globe, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fi' ? 'en' : 'fi');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white/70 backdrop-blur flex items-center justify-center shadow-sm">
              <span className="text-slate-900 font-bold text-xl">N</span>
            </div>
            <div className="leading-none">
              <span className="block text-slate-900 font-semibold text-lg">Nordmaster Group</span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{t('company.tagline')}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-slate-900 text-sm uppercase tracking-widest">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-slate-900 text-sm uppercase tracking-widest">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-slate-900 text-sm uppercase tracking-widest">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-slate-900 text-sm uppercase tracking-widest">
              {t('nav.about')}
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-full text-xs uppercase tracking-widest"
            >
              <Globe size={14} />
              {language === 'fi' ? 'Finnish → EN' : 'English → FI'}
            </button>
            <a
              href="tel:+358XXXXXXXX"
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-900 text-slate-900 rounded-full text-sm font-medium hover:bg-slate-900 hover:text-white transition-colors"
            >
              <Phone size={16} />
              {t('nav.call')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              {t('hero.cta.quote')}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-slate-900 p-2"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden rounded-2xl border border-slate-200 bg-white shadow-xl p-6 mb-6">
            <div className="grid gap-4 text-sm uppercase tracking-widest">
              <button onClick={() => scrollToSection('home')} className="text-left text-slate-700 hover:text-slate-900">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-slate-700 hover:text-slate-900">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-slate-700 hover:text-slate-900">
                {t('nav.projects')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-slate-700 hover:text-slate-900">
                {t('nav.about')}
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-between px-4 py-3 border border-slate-200 rounded-full text-xs uppercase tracking-widest text-slate-600"
              >
                <span className="flex items-center gap-2">
                  <Globe size={14} />
                  {language === 'fi' ? 'Finnish' : 'English'}
                </span>
                <span className="text-slate-400">{language === 'fi' ? 'EN' : 'FI'}</span>
              </button>
              <a
                href="tel:+358XXXXXXXX"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-slate-900 text-slate-900 rounded-full text-sm font-medium"
              >
                <Phone size={16} />
                {t('nav.call')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-full text-sm font-medium"
              >
                {t('hero.cta.quote')}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
