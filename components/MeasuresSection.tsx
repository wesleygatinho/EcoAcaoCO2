
import React from 'react';
import SectionContainer from './shared/SectionContainer';
import Card from './shared/Card';
// Update the import path if necessary, or create the file if it doesn't exist
import { Icons } from '../constants';
// If '../constants' is not correct, adjust the path to where your 'constants' file with 'Icons' is located.

interface MeasureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const measures: MeasureItem[] = [
  {
    id: 'energia-renovavel',
    title: 'Energia Renovável',
    description: 'Priorizar o uso de fontes de energia limpa (solar, eólica, hidrelétrica e biomassa) em detrimento dos combustíveis fósseis.',
    icon: <div className="text-yellow-500">{Icons.Sun}</div>
  },
  {
    id: 'reducao-desmatamento',
    title: 'Redução do Desmatamento',
    description: 'Combater o desmatamento e a degradação florestal, que são grandes fontes de emissão de CO₂ e perda de biodiversidade.',
    icon: <div className="text-green-500">{Icons.Leaf}</div>
  },
  {
    id: 'transporte-sustentavel',
    title: 'Transporte Sustentável',
    description: 'Promover ativamente o uso de transporte público eficiente, bicicletas, e veículos elétricos para diminuir a pegada de carbono urbana.',
    icon: <div className="text-blue-500">{Icons.Train}</div>
  },
  {
    id: 'eficiencia-energetica',
    title: 'Eficiência Energética',
    description: 'Incentivar o uso de equipamentos e tecnologias de alta eficiência energética em toda a cadeia produtiva e no consumo doméstico.',
    icon: <div className="text-orange-500">{Icons.Bolt}</div>
  },
  {
    id: 'politicas-reducao',
    title: 'Políticas de Redução',
    description: 'Implementar e fortalecer regulamentações e incentivos para que empresas e indústrias reduzam suas emissões de CO₂.',
    icon: <div className="text-indigo-500">{Icons.Scale}</div>
  }
];

const MeasuresSection: React.FC = () => {
  return (
    <SectionContainer title="Medidas Estratégicas para Reduzir Emissões de CO₂" className="bg-gray-50" id="medidas">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {measures.map((measure) => (
          <Card key={measure.id} title={measure.title} description={measure.description} icon={measure.icon} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default MeasuresSection;
