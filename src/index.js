import { createRoot } from 'react-dom/client';

import './index.scss';
// eslint-disable-next-line no-unused-vars
import App from './App.js';

const widget = document.getElementById('chat-widget');

if (widget) {
  createRoot(widget).render(<App />);
}
