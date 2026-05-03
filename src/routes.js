import { Routes, Route } from 'react-router-dom';

import Botao from './pages/Botao';
import Carta from './pages/Carta';
import Home from './pages/Home';
import Southpark from './pages/oGordinhoDaGalera';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Botao />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/videos" element={<Southpark />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;