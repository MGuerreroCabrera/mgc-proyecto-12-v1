import "./MemoryCard.css";

const MemoryCard = ({ emoji, isFlipped, onClick }) => {
  return (
    <div className={`memory-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {/* Si la carta está volteada, mostrar el emoji, de lo contrario, mostrar ? */}
      <p className="emoji">{isFlipped ? emoji : '?'}</p>
    </div>
  )
}

export default MemoryCard