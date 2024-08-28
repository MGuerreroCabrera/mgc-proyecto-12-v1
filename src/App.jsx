import "./App.css";
import React from "react";
import { useThemeContext } from "./hooks/useThemeContext";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import HeaderGame from "./components/HeaderGame/HeaderGame";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Estado para la barra de navegación
  const [ visible, setVisible ] = useState("");
  // Contexto para el cambiador de temas
  const { themeContext } = useThemeContext();

  return (
    <>
      <header className={ themeContext }>
        <ThemeChanger/>
        <HeaderGame visible={ visible } setVisible={ setVisible }/>
      </header>
      <main className={ themeContext }>      
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App