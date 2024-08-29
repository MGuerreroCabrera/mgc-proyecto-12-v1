import { useContext } from "react";
import "./HeaderGame.css";
import { GamerContext } from "../../contexts/GamerContext";
import { useThemeContext } from "../../hooks/useThemeContext";
import { useEffect } from "react";

const HeaderGame = ({ visible, setVisible }) => {
    // Importar el contexto del nombre del jugador
    const { gamerName } = useContext(GamerContext);
    // Importar el contexto del tema
    const { themeContext } = useThemeContext();

    // Control con useEffect del nombre del jugador para renderizar la cabecera.
    useEffect(() => {
        gamerName ? setVisible("visible") : setVisible("");
    }, [gamerName]);    

    return (
        <div id="header-game-container" className={`${visible ? visible : ''} ${themeContext}`}>
            <h2 className={ themeContext }>Diviértete mucho {gamerName}</h2>
        </div>
    )
}

export default HeaderGame