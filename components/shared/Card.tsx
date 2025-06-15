
import React from 'react';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      {icon && <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mx-auto">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default Card;
