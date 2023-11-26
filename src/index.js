import React from 'react';
import { createRoot } from 'react-dom/client';
import ServicioSocialApp from './servicioSocialApp';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ServicioSocialApp />
);

