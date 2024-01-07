import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/css/App.scss';
import { AppProvider } from './components/AppProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
