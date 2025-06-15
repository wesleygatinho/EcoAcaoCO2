
import React from 'react';
import SectionContainer from './shared/SectionContainer';
import ImageTextLayout from './shared/ImageTextLayout';

const ConsequencesSection: React.FC = () => {
  return (
    <SectionContainer title="Impactos das Altas Taxas de CO₂ no Planeta" className="bg-white" id="consequencias">
      <div className="space-y-16 md:space-y-20">
        <ImageTextLayout 
          imageUrl="https://s4.static.brasilescola.uol.com.br/be/2022/10/poluicao-do-ar.jpg"
          altText="Cidade coberta por uma densa camada de poluição"
          caption="A poluição atmosférica urbana é um sintoma visível do excesso de emissões."
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Intensificação do Efeito Estufa e Mudanças Climáticas</h3>
          <p className="mb-3">
            O aumento da concentração de CO₂ na atmosfera exacerba o efeito estufa. Embora seja um processo natural vital, seu desequilíbrio causa o aquecimento global, desencadeando mudanças climáticas com eventos extremos como furacões mais potentes, secas severas e ondas de calor intensas.
          </p>
        </ImageTextLayout>

        <ImageTextLayout 
          imageUrl="https://jornal.usp.br/wp-content/uploads/2022/09/19092022_desmatamento-amazonia2.jpg"
          altText="Vista aérea de área desmatada na floresta tropical"
          caption="Desmatamento e queimadas aceleram a crise climática."
          reversed 
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Acidificação dos Oceanos e Perda de Biodiversidade Marinha</h3>
          <p className="mb-3">
            Os oceanos absorvem cerca de um quarto do CO₂ emitido pela atividade humana, o que leva à acidificação da água do mar. Este fenômeno ameaça ecossistemas marinhos, especialmente organismos com conchas e esqueletos de carbonato de cálcio, como corais e moluscos, impactando toda a cadeia alimentar.
          </p>
        </ImageTextLayout>

        <ImageTextLayout 
          imageUrl="https://s2-g1.glbimg.com/EXLvrsKgYfKAweAuB2VQcn2FDOI=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/c/z/dimJ8YQ52SQgzVwFiZWQ/seca-amazonas-2024-08-22t113244z.jpg"
          altText="Leito de rio completamente seco com solo rachado"
          caption="A seca extrema no Brasil em 2024 é um alerta dos impactos já presentes."
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Crise Hídrica e Agrícola: Exemplo da Seca no Brasil (2024)</h3>
          <p className="mb-3">
            A seca histórica que atingiu o Brasil em 2024, superando em área a de 2015, ilustra a vulnerabilidade crescente. Vastas regiões enfrentaram seca severa a excepcional, com graves impactos na agricultura, no abastecimento de água e na geração de energia, evidenciando a urgência de adaptação e mitigação.
          </p>
        </ImageTextLayout>
      </div>
    </SectionContainer>
  );
};

export default ConsequencesSection;
