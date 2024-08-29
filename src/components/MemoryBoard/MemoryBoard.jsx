import "./MemoryBoard.css";

import React from 'react';
import useMemoryGame from "../../hooks/useMemoryGame";
import MemoryCard from "../MemoryCard/MemoryCard";
import { emojis } from "../../data/memoryData";
import Message from "../Message/Message";

const MemoryBoard = () => {
    // Uso del custom hook para manejar la lógica del juego
    const { cards, selectedCards, matchedCards, isGameOver, handleCardClick, initializeGame } = useMemoryGame(emojis);    

    return (
    <>
        <h2 className="game-title">Encuentra los pares</h2>
        {/* Con el estado isGameOver controlar si se visualiza el tablero o el mensaje.
        Mostrar tablero de cartas */}
        {!isGameOver && (
            <div className="memory-board">
            {cards.map((emoji, index) => (
                <MemoryCard
                key={index}
                emoji={emoji}
                isFlipped={selectedCards.includes(index) || matchedCards.includes(index)} // Volteamos la carta si ha sido seleccionada o emparejada
                onClick={() => handleCardClick(index)} // Maneja el click en la carta
                />
            ))}
            </div>
        )}
        {/* Mostraar mensaje de fin de juego si el juego ha terminado */}
        {isGameOver && (
        <Message
            message = "¡Enhorabuena! Has encontrado todos los pares."
            onReset = { initializeGame } // Reinicia el juego
        />
        )}
    </>
    );
}

export default MemoryBoard