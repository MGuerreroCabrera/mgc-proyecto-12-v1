// components/Game.jsx

import React, { useReducer, useEffect, useMemo } from 'react';
import Board from './Board';
import Message from './Message';
import './Game.css';
import { calculateWinner, getBestMove } from '../utils/gameLogic';

// Estado inicial del juego
const initialState = {
  board: Array(9).fill(null), // Tablero vacío
  xIsNext: true, // Turno inicial del jugador (X)
  winner: null, // No hay ganador al inicio
};

// Reducer para manejar el estado del juego
const gameReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE':
      // Actualizamos el tablero con el nuevo movimiento
      const newBoard = state.board.slice();
      newBoard[action.index] = state.xIsNext ? 'X' : 'O';
      return {
        ...state,
        board: newBoard,
        xIsNext: !state.xIsNext, // Cambiamos el turno
      };
    case 'SET_WINNER':
      // Establecemos el ganador en el estado
      return {
        ...state,
        winner: action.winner,
      };
    case 'RESET':
      // Reiniciamos el estado del juego
      return initialState;
    default:
      return state;
  }
};

// Componente principal del juego
const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Usamos useMemo para calcular el ganador solo cuando el tablero cambie
  const winner = useMemo(() => calculateWinner(state.board), [state.board]);

  // Efecto para manejar el fin del juego (ganador o empate)
  useEffect(() => {
    if (winner) {
      // Si hay un ganador, lo establecemos en el estado
      dispatch({ type: 'SET_WINNER', winner });
    } else if (!state.board.includes(null)) {
      // Si no hay más movimientos posibles, es un empate
      dispatch({ type: 'SET_WINNER', winner: 'Draw' });
    }
  }, [winner, state.board]);

  // Función para manejar el movimiento del jugador
  const handleClick = (i) => {
    if (state.board[i] || state.winner) return; // Si la casilla está ocupada o hay ganador, no hacemos nada
    dispatch({ type: 'MOVE', index: i }); // Hacemos el movimiento
  };

  // Efecto para manejar el turno de la máquina
  useEffect(() => {
    if (!state.xIsNext && !state.winner) {
      // La máquina realiza su movimiento usando la función de mejor movimiento
      const bestMove = getBestMove(state.board, true);
      dispatch({ type: 'MOVE', index: bestMove });
    }
  }, [state.xIsNext, state.winner]);

  // Renderizamos el tablero y el mensaje final si hay un ganador o empate
  return (
    <div className="game">
      <Board squares={state.board} onClick={handleClick} />
      {state.winner ? (
        <Message
          winner={state.winner}
          onReset={() => dispatch({ type: 'RESET' })}
        />
      ) : null}
    </div>
  );
};

export default Game;
