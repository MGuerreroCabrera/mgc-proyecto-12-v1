
import "./Message.css";
import { NavLink } from "react-router-dom";
import showConfetti from "../../utils/confetti";
import { useContext } from "react";
import { GamerContext } from "../../contexts/GamerContext";
import { useThemeContext } from "../../hooks/useThemeContext";

const Message = ({ winner, onReset, message }) => {
    
    // Importar el contexto para cambio de tema
    const { themeContext } = useThemeContext();

    // PARA EL 3 EN RAYA
    // Importar el contexto del nombre del jugador
    const { gamerName } = useContext(GamerContext);  
    
    // PARA EL 3 EN RAYA
    // Explosión de confetti si gana el jugador
    if(winner === '🐒'){
        showConfetti();
    }

    // PARA EL 3 EN RAYA
    // Inicializar variable message ( porque no se recibe por props ).
    if (winner === '🐒') {
    message = `¡Felicidades ${gamerName}! Has ganado.`;
    } else if (winner === '🤖') {
    message = 'Lo siento, has perdido. La máquina ha ganado.';
    } else if (winner === 'Draw') {
    message = '¡Empate! Nadie gana.';
    }
    
    return (
        
        <div className="message">
            <h2>{ message }</h2>
            <button className={`bt-message ${themeContext}`} onClick={onReset}>Volver a jugar</button>
            <NavLink to="../gameshome"><button className={`bt-message ${themeContext}`}>Home</button></NavLink>
        </div>
    )
}

export default Message