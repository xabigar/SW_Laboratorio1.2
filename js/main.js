// Importar clases


// The Fisher-Yates algorithm for shuffling an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Inicializar un único array con 50 maquinas, 50 humanos y 50 extraterrestres
let campo = []

// Ordenar los elementos del array al azar


// Imprimir el campo
console.log(campo)
// Para ir imprimiendo los turnos
let turno =1

// Mientras quede mas de un jugador en el array pelear por parejas
// while....
    console.log(`Turno: ${turno}`)
    // Pelear por parejas. Si los elementos que quedan en el array son impares, el último no pelea
    // eliminar los que se quedan fuera
    // ordernar
    turno++

// Imprimir campeón. Unico elemento que queda en el array
console.log("Campeón: " + campo[0].nombre) 
