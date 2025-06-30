import React from 'react';
import SectionContainer from './shared/SectionContainer';

const GameDescriptionSection: React.FC = () => {
  return (
    <SectionContainer className="bg-gray-50" id="jogo">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Nosso Jogo de Cartas: Desafie sua Pegada de Carbono</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Nosso jogo de cartas foi criado para conscientizar sobre a pegada de carbono dos objetos do nosso dia a dia. Em cada rodada, os jogadores devem identificar, entre as cartas disponíveis, o objeto que emite mais CO₂.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          O desafio é combinar velocidade e conhecimento: vence quem acertar todas as cartas no menor tempo possível, equilibrando estratégia e consciência ambiental.
        </p>
      </div>
    </SectionContainer>
  );
};

export default GameDescriptionSection;