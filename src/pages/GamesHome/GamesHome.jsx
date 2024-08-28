import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeContext";
import "./GamesHome.css";

// Página que muestra los juegos para que los seleccione el usuario
const GamesHome = () => {

    // Importar el contexto para el cambio de tema
    const { themeContext } = useThemeContext();

    return (
      <div id="games-home-container">
        <h2>¿A qué te apetece jugar?</h2>
        <div className="cards-container">          
          <NavLink to="/tresenraya" className={themeContext}>
            <article className="card">
              <h3>TRES EN RAYA</h3>
              <p>❌🔴❌</p>
            </article>
          </NavLink>
          <NavLink to="/memorygame" className={themeContext}>
            <article className="card">
                <h3>MEMORY GAME</h3>
                <p>🤔</p>
            </article>
          </NavLink>
        </div>
      </div>
    )
}

export default GamesHome