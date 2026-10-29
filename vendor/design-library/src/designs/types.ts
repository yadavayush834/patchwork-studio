import React from 'react';

export interface DesignRecreation {
  id: string;
  name: string;
  tagline: string;
  description: string;
  originalUrl: string;
  route: string;
  hashRoute: string;
  category: 'Productivity' | 'Fintech' | 'Developer Tools' | 'Design & Creative' | 'Cloud & Data';
  accentColor: string;
  bgTheme: 'dark' | 'light';
  signatureFeature: string;
  typography: {
    heading: string;
    body: string;
    mono?: string;
  };
  colorTokens: {
    bg: string;
    surface: string;
    border: string;
    accent: string;
    text: string;
  };
  keyTechniques: string[];
  designNotes: string;
  component: React.ComponentType<{ onBackToGallery?: () => void }>;
}
