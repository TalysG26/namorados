import './Home.css';
import Album from '../componentes/Album.js';
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
  function irParaOutraPagina() {
   
    navigate('/carta');
  } 


  return (
    <div className="pai">
      <div className="fundo">
      <h1 className="titulo">Bem-vindo ao nosso site bb! 💖</h1>
      </div>
      <div className='carta'>
        <button className="buttonStart" onClick={irParaOutraPagina}>Cartas</button>
      </div>
      <Album />
    </div>
  );
}

export default Home;