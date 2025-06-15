
import React from 'react';

export interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ImageSectionProps {
  imageUrl: string;
  altText: string;
  caption?: string;
  reversed?: boolean;
  children: React.ReactNode;
}
