import Square from "../Square/Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
    {squares.map((square, i) => (
      // Renderizar cada casilla con el valor correspondiente y una función de click
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
  )
}

export default Board