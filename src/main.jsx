import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './contexts/Theme.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import TicTacToe from './pages/TicTacToe/TicTacToe.jsx';
import MemoryGame from './pages/MemoryGame/MemoryGame.jsx';
import GamesHome from './pages/GamesHome/GamesHome.jsx';
import NotFound from './pages/404/404.jsx';
import { GamerContextProvider } from './contexts/GamerContext.jsx';

createRoot(document.querySelector('#root')).render(
  <BrowserRouter basename='/'>
  <Routes>
    {/* La ruta que envuelve la aplicación debe envolver el resto de rutas */}
    <Route path='/' element={
      // Proveedor del contexto para el cambio de tema
      <ThemeContextProvider>
        {/* Proveedor del contexto para manejar el nombre del jugador */}
        <GamerContextProvider>
          <App/>
        </GamerContextProvider>
      </ThemeContextProvider>}
    >
      <Route index element={ <Home/> }/>
      <Route path='tresenraya' element={<TicTacToe/>}/>
      <Route path='memorygame' element={<MemoryGame/>}/>
      <Route path='gameshome' element={<GamesHome/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
    {/* Fin ruta App */}
  </Routes>  
  </BrowserRouter>
);
