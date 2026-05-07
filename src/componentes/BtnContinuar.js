// BtnContinuar.jsx
import './BtnContinuar.css';
import { useNavigate } from 'react-router-dom';

function BtnContinuar() {
  const navigate = useNavigate(); // Hook de navegação

  const irParaHome = () => {
    navigate('/home'); // Caminho definido no seu arquivo de rotas
  };

  return (
    <div className='paiBtnContinuar'>
      <div className='button'>
        <button className='buttoncontinuar' onClick={irParaHome}>
          Voltar para o acervo💖
        </button>
      </div>
    </div>
  );
}

export default BtnContinuar;
