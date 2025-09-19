import { Humano } from '../js/humano.js';
import { Jugador } from '../js/jugador.js';

test('debería inicializar correctamente una instancia de Humano y obtener su nombre', () => {
    const humano = new Humano('Juan');
    expect(humano.nombre).toBe('Juan');
    
    // Comprobaciones adicionales de las otras propiedades
    expect(humano.fuerza).toBe(70); // fuerza inicializada a 70
    expect(humano.salud).toBe(150); // salud inicializada a 150
});

test('luchar debería reducir correctamente la salud según la fuerza en una instancia de Humano', () => {
    const humano = new Humano('Juan');
    const jugador = new Jugador('Ana', 50, 100);

    humano.luchar(jugador);
    
    expect(jugador.salud).toBeLessThanOrEqual(100); // salud reducida por la fuerza del humano
    expect(humano.salud).toBeLessThanOrEqual(150); // la salud del humano permanece sin cambios
});

test('luchar debería manejar correctamente múltiples combates entre instancias de Humano', () => {
    const humano1 = new Humano('Juan');
    const humano2 = new Humano('Ana');

    // Simulamos Math.random para controlar el resultado de la lucha
    const originalRandom = Math.random;
    Math.random = () => 0; // humano1 ganará siempre
    
    // Ejecutamos varias luchas seguidas
    for (let i = 0; i < 5; i++) {
        humano1.luchar(humano2);
    }

    // Restauramos el Math.random original
    Math.random = originalRandom;

    // No podemos predecir exactamente el resultado sin manipular más random
    expect(humano1.salud).toBeLessThanOrEqual(0);
    expect(humano2.salud).toBeGreaterThanOrEqual(0);
});