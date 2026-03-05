import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<'top' | 'services' | 'process' | 'contact'>('top');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['top', 'services', 'process', 'contact'] as const;
      const offset = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= offset) {
          setActiveSection(sections[i]);
          break;
        }
      }
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/95 border-b border-white/10 py-3' : 'bg-zinc-950/80 backdrop-blur-md py-4'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white block leading-none">Nordmaster Group</span>
              <span className="text-xs text-zinc-400">{t('company.tagline')}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('top')}
              className={`navLink ${activeSection === 'top' ? 'navLinkActive' : ''}`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`navLink ${activeSection === 'services' ? 'navLinkActive' : ''}`}
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`navLink ${activeSection === 'process' ? 'navLinkActive' : ''}`}
            >
              {t('nav.process')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`navLink ${activeSection === 'contact' ? 'navLinkActive' : ''}`}
            >
              {t('nav.contact')}
            </button>

            <div className="flex items-center gap-2 border border-white/20 rounded-full px-2 py-1">
              <button
                onClick={() => setLanguage('fi')}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  language === 'fi' ? 'bg-white text-zinc-950' : 'text-zinc-300'
                }`}
              >
                FI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  language === 'en' ? 'bg-white text-zinc-950' : 'text-zinc-300'
                }`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="flex items-center gap-2 bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-full hover:bg-amber-300 transition-all shadow-md hover:shadow-lg text-sm font-semibold">
              {t('nav.offer')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-zinc-200 hover:text-white p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-white/10 pt-6">
            <button onClick={() => scrollToSection('top')} className="block w-full text-left navLink">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left navLink">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left navLink">
              {t('nav.process')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left navLink">
              {t('nav.contact')}
            </button>

            <div className="flex items-center gap-2 border border-white/20 rounded-full px-2 py-1 w-fit">
              <button
                onClick={() => setLanguage('fi')}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  language === 'fi' ? 'bg-white text-zinc-950' : 'text-zinc-300'
                }`}
              >
                FI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  language === 'en' ? 'bg-white text-zinc-950' : 'text-zinc-300'
                }`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="flex items-center justify-center gap-2 bg-amber-400 text-zinc-950 px-6 py-3 rounded-lg hover:bg-amber-300 transition-all">
              <span className="font-medium">{t('nav.offer')}</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
