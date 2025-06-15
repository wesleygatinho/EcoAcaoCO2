
import React from 'react';
import SectionContainer from './shared/SectionContainer';

const CallToActionSection: React.FC = () => {
  const handleLearnMore = () => {
    alert('Obrigado pelo seu interesse! Pesquise sobre práticas sustentáveis, apoie organizações ambientais e cobre ações dos seus representantes políticos.');
  };

  const handleReviewMeasures = () => {
    const measuresSection = document.getElementById('medidas');
    if (measuresSection) {
      measuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-700 text-white" id="acao">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Junte-se a Nós: Aja Agora Pelo Nosso Futuro!</h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          A redução das emissões de gases de efeito estufa é uma responsabilidade compartilhada e uma corrida contra o tempo. Cada ação, individual ou coletiva, conta para mitigar os impactos das mudanças climáticas, proteger a biodiversidade e assegurar um planeta habitável para todos.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          <button 
            onClick={handleLearnMore}
            className="w-full sm:w-auto bg-white text-green-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white transition duration-300 transform hover:scale-105"
          >
            Aprenda Mais e Engaje-se
          </button>
          <button 
            onClick={handleReviewMeasures}
            className="w-full sm:w-auto bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-gray-800 transition duration-300 transform hover:scale-105"
          >
            Reveja as Medidas Sustentáveis
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CallToActionSection;
