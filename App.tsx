
import React from 'react';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import MeasuresSection from './components/MeasuresSection';
import ConsequencesSection from './components/ConsequencesSection';
import CallToActionSection from './components/CallToActionSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="#" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">EcoAção<span className="text-blue-500">CO₂</span></a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-1">
                  <a href="#introducao" className="text-gray-700 hover:bg-green-100 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Introdução</a>
                  <a href="#medidas" className="text-gray-700 hover:bg-green-100 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Medidas</a>
                  <a href="#consequencias" className="text-gray-700 hover:bg-green-100 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Consequências</a>
                  <a href="#acao" className="text-gray-700 hover:bg-green-100 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Ação</a>
                </div>
              </div>
              {/* Mobile menu button can be added here */}
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow pt-16"> {/* Padding-top for fixed navbar */}
        <HeroSection />
        <IntroductionSection />
        <MeasuresSection />
        <ConsequencesSection />
        <CallToActionSection />
      </main>

      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Redução de Emissão de CO₂. Todos os direitos reservados.</p>
          <p className="text-xs mt-2">Um esforço para um planeta mais saudável.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
