import { Routes, Route } from 'react-router-dom';
import Botao from './pages/Botao';
import Carta from './pages/Carta';
import Home from './pages/Home';
import Southpark from './pages/oGordinhoDaGalera';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Botao />} />
      <Route path="/Botao/oGordinhoDaGalera" element={<Southpark />} />
      <Route path="/Botao/Carta" element={<Carta />} />
      <Route path="/Botao/Carta/Home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;