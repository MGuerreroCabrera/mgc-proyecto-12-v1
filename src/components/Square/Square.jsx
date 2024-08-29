import React from 'react';
import "./Square.css";
import { useThemeContext } from '../../hooks/useThemeContext';

const Square = ({ value, onClick }) => {

  // Importar el contexto para los estilos del tema
  const { themeContext } = useThemeContext();

  return (
    // Renderizar un botón que representa la casilla del tablero
    <div className={`square ${themeContext}`} onClick={onClick}>
      <p>{value}</p>
    </div>
  )
}

export default Square