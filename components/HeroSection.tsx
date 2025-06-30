import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div 
      className="relative bg-gradient-to-br from-green-500 via-teal-600 to-blue-700 text-white py-24 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/forest_aerial/1920/1080" 
          alt="Forest aerial view" 
          className="w-full h-full object-cover opacity-20" 
          loading="eager"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-md">
          Redução de Emissão de Gás Carbônico
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          A chave para mitigar as mudanças climáticas e proteger o nosso planeta para as futuras gerações.
        </p>
        <div className="mt-8">
          <a
            href="https://marianasilva028.itch.io/cards-c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-gray-800 transition duration-300 transform hover:scale-105"
          >
            Clique Neste Botão e Tenha Acesso ao Nosso Jogo
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;