import './oGordinhoDaGalera.css';
import { useNavigate } from 'react-router-dom'; 

function Videos() {
    const navigate = useNavigate();

    function irParaOutraPagina() {
        navigate('/oGordinhoDaGalera/Home');
    }
  return (

    

    <div className="videos-page">
      <h1 className="titulo"> Momentos do nosso filho 🎥💖</h1>

      <div className="videos-container">

        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/oiER4LfZ1wQ" title="video1" allowFullScreen></iframe>
        </div>

        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/Yyoyf7VACAA" title="video2" allowFullScreen></iframe>
        </div>

        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/5nbWcctJHck" title="video3" allowFullScreen></iframe>
        </div>

        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/Zk6sMGryJZE" title="video4" allowFullScreen></iframe>
        </div>

      </div>

      <button className="button-next" onClick={irParaOutraPagina}> Próxima página </button>
    </div>
  );
}

export default Videos;