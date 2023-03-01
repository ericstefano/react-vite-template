import '@unocss/reset/tailwind.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'uno.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
