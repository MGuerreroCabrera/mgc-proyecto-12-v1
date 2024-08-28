// Estado inicial del juego
export const initialState = {
    // Tablero vacío
    board: Array(9).fill(null),
    // Turno inicial del jugador. La máquina nunca empieza
    xIsNext: true,
    // Inicialización a null del ganador
    winner: null
  };
  
// Reducer para manejar el estado del juego
export const TicTacToeReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE':
      // Actualizar tablero con el nuevo movimiento
      const newBoard = state.board.slice();
      newBoard[action.index] = state.xIsNext ? '🐒' : '🤖';
      return {
        ...state,
        board: newBoard,
        // Cambio de turno
        xIsNext: !state.xIsNext, 
      };
    case 'SET_WINNER':
      // Establecer el ganador en el estado
      return {
        ...state,
        winner: action.winner,
      };
    case 'RESET':
      // Reiniciar el estado del juego
      return initialState;
    default:
      return state;
  }
};