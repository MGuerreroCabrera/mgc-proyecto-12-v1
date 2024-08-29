// Función para barajar los elementos de un array utilizando el algoritmo de Fisher-Yates
// GRACIAS GPT 😅
export const shuffleArray = (array) => {
    // Crear copia del array original para evitar mutaciones
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Elegir índice aleatorio
        const j = Math.floor(Math.random() * (i + 1)); 
        // Intercambiar los elementos en las posiciones i y j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    // Devolver el array barajado
    return shuffledArray; 
};
  