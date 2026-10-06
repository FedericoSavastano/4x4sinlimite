import { lazy, Suspense, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useItems } from './hooks/useItems';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Loading from './components/Loading';

// Se descargan recién cuando se visita la ruta
const Travesia = lazy(() => import('./components/Travesia'));
const Contacto = lazy(() => import('./components/Contacto'));
const NotFound = lazy(() => import('./components/NotFound'));

const EMPTY = [];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const ErrorMessage = ({ onRetry }) => (
  <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
    <p>No pudimos cargar la información.</p>
    <button onClick={onRetry}>Reintentar</button>
  </div>
);

const App = () => {
  const { data, isPending, isError, refetch } = useItems();
  const items = data ?? EMPTY;

  // Solo las rutas que necesitan datos esperan; el resto se muestra siempre
  const withData = (element) => {
    if (isPending) return <Loading />;
    if (isError && !items.length) return <ErrorMessage onRetry={refetch} />;
    return element;
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar items={items} />
      <div className='content' style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={withData(<Home items={items} />)} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/:id' element={withData(<Travesia items={items} />)} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;