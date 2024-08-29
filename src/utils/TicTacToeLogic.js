import { minimax } from "./minimax";

// Función para calcular el ganador
export const calculateWinner = (board) => {
    // Matriz de posiciones ganadoras posibles
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    // Recorrer todas las líneas para comprobar si alguna es ganadora
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    // Si no hay ganador, devolver null
    return null;
  };
  
  // Función para obtener el mejor movimiento, dependiendo de la dificultad
  export const getBestMove = (board, isMaximizing) => {
    // Decidir si la máquina juega óptimamente (90% de las veces) o aleatoriamente
    const isHard = Math.random() < 0.9;
  
    // Si se juega en modo difícil, se usa el algoritmo Minimax
    if (isHard) {
      const { move } = minimax(board, isMaximizing);
      return move;
    }
  
    // Si se juega en modo fácil, elegir movimiento aleatorio
    const emptyIndices = board.map((v, i) => (v === null ? i : null)).filter(v => v !== null);
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  };
  