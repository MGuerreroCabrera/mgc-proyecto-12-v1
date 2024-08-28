// Contexto para manejar el nombre del jugador en toda la aplicación
import React, { createContext, useState } from 'react';

// Crear el contexto
export const GamerContext = createContext();

// Proveedor del contexto
export const GamerContextProvider = ({ children }) => {
  const [gamerName, setGamerName] = useState('');

  return (
    <GamerContext.Provider value={{ gamerName, setGamerName }}>
      {children}
    </GamerContext.Provider>
  );
};