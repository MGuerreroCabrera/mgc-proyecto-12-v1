import { useThemeContext } from "../../hooks/useThemeContext";
import "./Footer.css";

const Footer = () => {

    // Importar el contexto para el cambio de tema
    const { themeContext } = useThemeContext(); 

    return (
        <footer className={ themeContext }>
            <p className={ themeContext }>Manuel Guerrero Cabrera &copy;</p>
        </footer>
    )
}

export default Footer