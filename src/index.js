import { createRoot } from 'react-dom';

import './index.scss';
// eslint-disable-next-line no-unused-vars
import App from './App.js';

window.onload = () => {
  const widget = document.getElementById('chat-widget');

  console.log('Chat widget initializing...');

  if (widget) {
    console.log('Found chat widget element');
    createRoot(widget).render(<App />);
  }
};
