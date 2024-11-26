import { createRoot } from 'react-dom/client';

import './index.scss';
// eslint-disable-next-line no-unused-vars
import App from './App.js';

createRoot(document.getElementById('chat-widget')).render(<App />);
