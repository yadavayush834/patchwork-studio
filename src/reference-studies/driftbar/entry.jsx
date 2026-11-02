import React from 'react';
import { createRoot } from 'react-dom/client';
import TechText from './TechText';
const target = document.getElementById('headline-effect');
if (target) createRoot(target).render(<TechText text="Make space for calm." fontFamily="Inter" fontWeight={600} fontSize={150} letterSpacing={-0.055} align="center" color="#171a21" accentColor="#6777ab" reveal="letter" dashLength={4} dashGap={2} specks={15} intro="metrics" introDuration={2.1} clickKick guides={false} />);
