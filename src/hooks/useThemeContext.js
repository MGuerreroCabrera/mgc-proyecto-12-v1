import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

// HOOK para uso del cambio de tema.
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context;
}