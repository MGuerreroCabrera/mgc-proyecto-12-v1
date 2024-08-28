import { useContext } from "react";
import "./HeaderGame.css";
import { GamerContext } from "../../contexts/GamerContext";
import { useThemeContext } from "../../hooks/useThemeContext";

const HeaderGame = ({ visible, setVisible }) => {
    // Importar el contexto del nombre del jugador
    const { gamerName } = useContext(GamerContext);
    // Importar el contexto del tema
    const { themeContext } = useThemeContext();

    gamerName ? setVisible("visible") : setVisible("");

    return (
        <div id="header-game-container" className={`${visible ? visible : ''} ${themeContext}`}>
            <h2 className={ themeContext }>Diviértete mucho {gamerName}</h2>
        </div>
    )
}

export default HeaderGame