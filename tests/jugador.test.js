import { Jugador } from '../js/jugador.js';

test('debería inicializar correctamente una instancia de Jugador y obtener su nombren', () => {
    const jugador = new Jugador('Juan', 10, 100);
    expect(jugador.nombre).toBe('Juan');
    // Se pueden añadir más comprobaciones para las otras propiedades
    expect(jugador.fuerza).toBe(10);
    expect(jugador.salud).toBe(100);
});

test('luchar debería reducir correctamente la salud según la fuerza', () => {
    const jugador1 = new Jugador('Juan', 12, 100);
    const jugador2 = new Jugador('Ana', 5, 100);
    
    // Simulamos Math.random para controlar el resultado
    const originalRandom = Math.random;
    Math.random = () => 0.5; // hará que jugador1 gane
    
    jugador1.luchar(jugador2);
    
    expect(jugador2.salud).toBe(88); // salud reducida en 12
    expect(jugador1.salud).toBe(100); // salud sin cambios

    // Restauramos Math.random
    Math.random = originalRandom;
});

test('luchar debería manejar correctamente múltiples combates', () => {
    const jugador1 = new Jugador('Juan', 10, 100);
    const jugador2 = new Jugador('Ana', 5, 100);

    // Ejecutamos varias luchas
    for (let i = 0; i < 5; i++) {
        jugador1.luchar(jugador2);
    }

    // No controlamos Math.random, solo verificamos que los valores sigan en rangos válidos
    expect(jugador1.salud).toBeGreaterThanOrEqual(0);
    expect(jugador2.salud).toBeGreaterThanOrEqual(0);
});
