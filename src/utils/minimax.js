// utils/minimax.js
import { calculateWinner } from "./TicTacToeLogic";

// Implementación del algoritmo Minimax
export const minimax = (board, isMaximizing) => {
  // Verificamos si hay un ganador y devolvemos la puntuación correspondiente
  const winner = calculateWinner(board);
  if (winner === '🤖') return { score: 1 };
  if (winner === '🐒') return { score: -1 };
  if (!board.includes(null)) return { score: 0 };

  const scores = [];
  const moves = [];

  // Recorremos todas las casillas disponibles para simular movimientos
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      const newBoard = board.slice();
      newBoard[i] = isMaximizing ? '🤖' : '🐒'; // 'O' es la máquina, 'X' es el jugador
      const result = minimax(newBoard, !isMaximizing); // Llamada recursiva
      scores.push(result.score); // Guardamos la puntuación del movimiento
      moves.push(i); // Guardamos el índice del movimiento
    }
  }

  // Devolvemos el mejor movimiento dependiendo si estamos maximizando o minimizando
  if (isMaximizing) {
    const maxScoreIndex = scores.indexOf(Math.max(...scores));
    return { score: scores[maxScoreIndex], move: moves[maxScoreIndex] };
  } else {
    const minScoreIndex = scores.indexOf(Math.min(...scores));
    return { score: scores[minScoreIndex], move: moves[minScoreIndex] };
  }
};
