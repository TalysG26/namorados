import './oGordinhoDaGalera.css';
import { useNavigate } from 'react-router-dom'; 
import Video1 from '../imgs/videosSouthPark/Video1.mp4';
import Video2 from '../imgs/videosSouthPark/Video2.mp4';
import Video3 from '../imgs/videosSouthPark/Video3.mp4';
import Video4 from '../imgs/videosSouthPark/Video4.mp4';
import Video5 from '../imgs/videosSouthPark/Video5.mp4';
import Video6 from '../imgs/videosSouthPark/Video6.mp4';

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
          <video controls>
            <source src={Video1} type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <video controls>
            <source src={Video2} type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <video controls>
            <source src={Video3} type="video/mp4" />
          </video>
        </div>

        <div className="video-card">
          <video controls>
            <source src={Video4} type="video/mp4" />
          </video>
        </div>

         <div className="video-card">
          <video controls>
            <source src={Video5} type="video/mp4" />
          </video>
        </div>

         <div className="video-card">
          <video controls>
            <source src={Video6} type="video/mp4" />
          </video>
        </div>

      </div>

      <button className="button-next" onClick={irParaOutraPagina}> Próxima página </button>
    </div>
  );
}

export default Videos;