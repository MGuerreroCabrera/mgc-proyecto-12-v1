// utils/minimax.js
import { calculateWinner } from "./TicTacToeLogic";

// Implementación del algoritmo Minimax
export const minimax = (board, isMaximizing) => {
  // Verificar si hay un ganador y devolver la puntuación correspondiente
  const winner = calculateWinner(board);
  if (winner === '🤖') return { score: 1 };
  if (winner === '🐒') return { score: -1 };
  if (!board.includes(null)) return { score: 0 };

  const scores = [];
  const moves = [];

  // Recorrer todas las casillas disponibles para simular movimientos
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      const newBoard = board.slice();
      // '🤖' es la máquina, '🐒' es el jugador
      newBoard[i] = isMaximizing ? '🤖' : '🐒'; 
      // Llamada recursiva
      const result = minimax(newBoard, !isMaximizing); 
      // Guardar puntuación del movimiento
      scores.push(result.score); 
      // Guardar el índice del movimiento
      moves.push(i); 
    }
  }

  // DIFICULTAD
  // Devolver el mejor movimiento dependiendo si se está maximizando o minimizando
  if (isMaximizing) {
    const maxScoreIndex = scores.indexOf(Math.max(...scores));
    return { score: scores[maxScoreIndex], move: moves[maxScoreIndex] };
  } else {
    const minScoreIndex = scores.indexOf(Math.min(...scores));
    return { score: scores[minScoreIndex], move: moves[minScoreIndex] };
  }
};
