import './Home.css';
import Album from '../componentes/Album.js';

function Home() {
  return (
    <div className="pai">
      <h1 className="titulo">Bem-vindo ao nosso site bb! 💖</h1>

      <Album />
    </div>
  );
}

export default Home;