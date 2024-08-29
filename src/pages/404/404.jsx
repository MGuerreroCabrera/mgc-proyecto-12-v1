import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeContext";
import"./404.css";

const NotFound = () => {

  // Importar el contexto para el cambio de tema
  const { themeContext } = useThemeContext();

  return (
    <div className='message-container'>
        <p className={ themeContext }>404. Ups! Parece que tenemos un problema con la página que estás buscando</p>
        <NavLink to="/"><button className={`bt-message ${themeContext}`}>Volver al inicio</button></NavLink>
    </div>
  )
}

export default NotFound