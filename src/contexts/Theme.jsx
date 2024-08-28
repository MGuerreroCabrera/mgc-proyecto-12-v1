import { useState } from "react";
import { createContext } from "react";

// 1. Crear el contexto
export const ThemeContext = createContext();

// 2. Crear el proveedor del contexto
export const ThemeContextProvider = ({ children }) => {
    const [themeContext, setThemeContext] = useState("light");
    const values = { themeContext, setThemeContext };
    return (
        <ThemeContext.Provider value={ values }>
            { children }
        </ThemeContext.Provider>
    )
}