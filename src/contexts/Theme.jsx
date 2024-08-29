import { useState } from "react";
import { createContext } from "react";

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeContextProvider = ({ children }) => {
    const [themeContext, setThemeContext] = useState("light");
    const values = { themeContext, setThemeContext };
    return (
        <ThemeContext.Provider value={ values }>
            { children }
        </ThemeContext.Provider>
    )
}