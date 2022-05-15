import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Preloader } from './components/Preloader';
const Loader = () => <Preloader/>
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = React.lazy(()=> import('./App'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>} >
    <App />
    </Suspense>
  </React.StrictMode>
);

