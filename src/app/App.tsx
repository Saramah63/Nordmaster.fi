import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <HowWeWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
