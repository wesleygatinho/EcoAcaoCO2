
import React from 'react';
import SectionContainer from './shared/SectionContainer';

const IntroductionSection: React.FC = () => {
  return (
    <SectionContainer className="bg-white" id="introducao">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">A Urgência da Ação Climática Global</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          A redução das emissões de CO₂ é uma necessidade imperativa para mitigar as mudanças climáticas e salvaguardar a saúde do nosso planeta. As emissões descontroladas de carbono e outros gases de efeito estufa (GEE) estão exacerbando a crise ambiental que enfrentamos, com consequências cada vez mais visíveis.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          A solução reside na transição decisiva para iniciativas sustentáveis, focadas em diminuir drasticamente as emissões de GEE e em investir massivamente em fontes de energia inovadoras, limpas e renováveis. Somente através de um esforço coletivo e ambicioso podemos construir um futuro mais resiliente e equilibrado.
        </p>
      </div>
    </SectionContainer>
  );
};

export default IntroductionSection;
