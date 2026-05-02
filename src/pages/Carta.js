import './Carta.css'
import TextCarta from '../componentes/cartas/TextCarta2024.js';
import BtnContinuar from  '../componentes/BtnContinuar.js';
function Carta() {
    return(

        <div className='paidetodos'>
            <TextCarta/>
            <BtnContinuar/>
        </div>
        
    )
}
export default Carta;