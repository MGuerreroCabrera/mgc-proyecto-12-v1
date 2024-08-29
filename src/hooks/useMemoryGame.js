import { useState, useEffect } from 'react';
import { shuffleArray } from '../utils/shufleArray';

// Custom Hook para manejar la lógica del Memory Game
const useMemoryGame = (emojis) => {
  // Estado para manejar las cartas del juego
  const [cards, setCards] = useState([]);
  // Estado para manejar el índice de las cartas seleccionadas
  const [selectedCards, setSelectedCards] = useState([]);
  // Estado para manejar las cartas que han sido descubiertas
  const [matchedCards, setMatchedCards] = useState([]);
  // Estado para manejar si el juego está bloqueado temporalmente
  const [isBoardLocked, setIsBoardLocked] = useState(false);
  // Estado para manejar si el juego ha terminado
  const [isGameOver, setIsGameOver] = useState(false);

  // Función para inicializar el juego barajando las cartas
  const initializeGame = () => {
    // Duplicar emojis y mezclar con la función shuffleArray
    const shuffledCards = shuffleArray([...emojis, ...emojis]); 
    // Establecer cartas barajadas en el estado
    setCards(shuffledCards);
    // Reiniciar cartas seleccionadas 
    setSelectedCards([]);
    // Reiniciar cartas emparejadas 
    setMatchedCards([]); 
    // Desbloquear tablero
    setIsBoardLocked(false); 
    // Indicar que el juego no ha terminado
    setIsGameOver(false); 
  };

  // Inicializar el juego al montar el componente
  useEffect(() => {
    initializeGame();
  }, []);

  // Comprobar si el juego ha terminado
  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      // Establecer el estado del juego a terminado
      setIsGameOver(true); 
    }
  }, [matchedCards, cards]);

  // Función para manejar el click en una carta
  const handleCardClick = (index) => {
    // Evitar que se pueda interactuar con la carta si el tablero está bloqueado o la carta ya ha sido seleccionada o emparejada
    if (isBoardLocked || selectedCards.includes(index) || matchedCards.includes(index)) {
      return; 
    }

    // Añadir la carta seleccionada al estado
    const newSelectedCards = [...selectedCards, index]; 
    setSelectedCards(newSelectedCards);

    // Comprobar si coinciden si se han seleccionado dos cartas
    if (newSelectedCards.length === 2) {
      
      const [firstIndex, secondIndex] = newSelectedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        // Si coinciden, marcarlas como emparejadas
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        // Reiniciar cartas seleccionadas
        setSelectedCards([]); 
      } else {
        // Si no coinciden, bloquear tablero temporalmente y voltear cartas después de un segundo
        setIsBoardLocked(true);
        setTimeout(() => {
          // Reiniciar cartas seleccionadas
          setSelectedCards([]);
          // Desbloquear tablero
          setIsBoardLocked(false);
        }, 1000);
      }
    }
  };
  return { cards, selectedCards, matchedCards, isGameOver, handleCardClick, initializeGame };
};

export default useMemoryGame;
