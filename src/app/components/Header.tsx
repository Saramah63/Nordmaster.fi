import { Menu, X, Phone, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 block leading-none">Nordmaster Group</span>
              <span className="text-xs text-slate-600">{t('company.tagline')}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
              {t('nav.services')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
              {t('nav.projects')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group">
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
            </button>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors border-2 border-slate-200 rounded-lg hover:border-slate-300"
            >
              <Globe size={18} />
              <span className="uppercase">{language}</span>
            </button>

            <a href="tel:+358XXXXXXXX" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
              <Phone size={18} />
              <span className="font-medium">{t('nav.call')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-slate-900 p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-slate-200 pt-6">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium">
              {t('nav.about')}
            </button>
            
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 w-full px-4 py-3 text-slate-700 hover:text-slate-900 font-medium border-2 border-slate-200 rounded-lg hover:border-slate-300"
            >
              <Globe size={18} />
              <span className="uppercase">{language === 'fi' ? 'Finnish' : 'English'}</span>
              <span className="ml-auto text-sm text-slate-500">→ {language === 'fi' ? 'EN' : 'FI'}</span>
            </button>

            <a href="tel:+358XXXXXXXX" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-all">
              <Phone size={18} />
              <span className="font-medium">{t('nav.call')}</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
