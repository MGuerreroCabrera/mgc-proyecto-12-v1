import "./TicTacToeGame.css";
import { useReducer } from "react";
import { initialState, TicTacToeReducer } from "../../reducers/TicTacToeReducer";
import { useMemo } from "react";
import { calculateWinner, getBestMove } from "../../utils/TicTacToeLogic";
import { useEffect } from "react";
import Board from "../Board/Board";
import Message from "../Message/Message";

const TicTacToeGame = () => {
  const [state, dispatch] = useReducer(TicTacToeReducer, initialState);

  // Uso de useMemo para calcular el ganador solo cuando el tablero cambie
  const winner = useMemo(() => calculateWinner(state.board), [state.board]);

  // Efecto para manejar el fin del juego ( ganador o empate )
  useEffect(() => {
    if (winner) {
      // Modificar el estado winner si hay ganador
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
  
    // Renderizar el tablero solo si no hay un ganador o empate
    return (            
      <>
        <h2 className="game-title">Tres en raya</h2>
        {!state.winner ? (
          <Board squares={state.board} onClick={handleClick} />
        ) : (
          <Message
            winner = {state.winner}
            onReset = {() => dispatch({ type: 'RESET' })}
          />
        )}
      </>
    );
}

export default TicTacToeGame