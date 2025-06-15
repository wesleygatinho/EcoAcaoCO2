
import React from 'react';
import { ImageSectionProps } from '../../types';

const ImageTextLayout: React.FC<ImageSectionProps> = ({ imageUrl, altText, caption, children, reversed = false }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
      <div className="md:w-1/2">
        <img 
            src={imageUrl} 
            alt={altText} 
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" 
            loading="lazy"
        />
        {caption && <p className="text-xs text-gray-500 mt-2 text-center italic">{caption}</p>}
      </div>
      <div className="md:w-1/2 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default ImageTextLayout;
