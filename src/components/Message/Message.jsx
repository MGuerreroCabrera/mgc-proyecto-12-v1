
import "./Message.css";
import { NavLink } from "react-router-dom";
import showConfetti from "../../utils/confetti";
import { useContext } from "react";
import { GamerContext } from "../../contexts/GamerContext";
import { useThemeContext } from "../../hooks/useThemeContext";

const Message = ({ winner, onReset }) => {
    // Importar el contexto para cambio de tema
    const { themeContext } = useThemeContext();

    // Importar el contexto del nombre del jugador
    const { gamerName } = useContext(GamerContext);  
    
    // Explosión de confetti si gana el jugador
    if(winner === '🐒'){
        showConfetti();
    }
    // Determinamos el mensaje a mostrar dependiendo del valor de 'winner'
    const printResult = () => {
        if (winner === '🐒') {
        return `¡Felicidades ${gamerName}! Has ganado.`;
        } else if (winner === '🤖') {
        return 'Lo siento, has perdido. La máquina ha ganado.';
        } else if (winner === 'Draw') {
        return '¡Empate! Nadie gana.';
        }
    };

    return (
        
        <div className="message">
            <h2>{ printResult() }</h2>
            <button className={`bt-message ${themeContext}`} onClick={onReset}>Volver a jugar</button>
            <NavLink to="../gameshome"><button className={`bt-message ${themeContext}`}>Home</button></NavLink>
        </div>
    )
}

export default Message