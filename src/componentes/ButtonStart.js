import { useNavigate } from 'react-router-dom';
import './ButtonStart.css';

function ButonStart() {
    const navigate = useNavigate();

    function irParaOutraPagina() {
        navigate('/videos');
    }

    return (
        <div className='paiButton'>
            <button className='buttonStart' onClick={irParaOutraPagina}>
                 Começar nossa história 💌
            </button>
        </div>
    );
}

export default ButonStart;