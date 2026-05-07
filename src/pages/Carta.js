import './Carta.css'
import TextCarta24 from '../componentes/cartas/TextCarta2024.js';
import TextCarta25 from '../componentes/cartas/TextCarta2025.js';
import TextCarta26 from '../componentes/cartas/TextCarta2026.js';
import BtnContinuar from  '../componentes/BtnContinuar.js';
function Carta() {
    return(

        <div className='paidetodos'>
          < div className='fundoCarta'>
            <TextCarta24/>
            <TextCarta25/>
            <TextCarta26/>
            
              </div>
 <BtnContinuar/>
        </div>
        
    )
}
export default Carta;