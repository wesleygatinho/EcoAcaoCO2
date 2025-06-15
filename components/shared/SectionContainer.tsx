
import React from 'react';
import { SectionProps } from '../../types';

const SectionContainer: React.FC<SectionProps> = ({ title, children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {title && (
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 md:mb-16">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
