import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useThemeContext } from "../../hooks/useThemeContext";

const NavBar = ({ visible, setVisible }) => {
  

  // Uso del contexto para cambiar el tema
  const { themeContext } = useThemeContext();

  setTimeout(() => {
    setVisible("visible");
  }, 2000);

  

  return (
    <nav className={visible}>
        <NavLink to="" className={ ({ isActive }) => (isActive ? `active ${themeContext}` : themeContext) } >Home</NavLink>
        <NavLink to="tresenraya" className={ ({ isActive }) => (isActive ? `active ${themeContext}` : themeContext) }>Tres en raya</NavLink>
        <NavLink to="memorygame" className={ ({ isActive }) => (isActive ? `active ${themeContext}` : themeContext) }>Memory Game</NavLink>
    </nav>  
  )
}

export default NavBar