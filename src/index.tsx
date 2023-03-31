import { createRoot } from 'react-dom/client';
import '@fontsource/abel';
import '@fontsource/roboto';
import { App } from './app';

const root = createRoot(document.getElementById('app-root') as HTMLDivElement);
root.render(<App />);
