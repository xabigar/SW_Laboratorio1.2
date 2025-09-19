import { Extraterrestre } from '../js/extraterrestre.js';
import { Jugador } from '../js/jugador.js';

test('debería inicializar correctamente Extraterrestre y devolver el nombre invertido en el getter', () => {
  const extraterrestre = new Extraterrestre('John');

  // miNombre se guarda tal cual, pero el getter nombre lo devuelve invertido
  expect(extraterrestre.miNombre).toBe('John');
  expect(extraterrestre.nombre).toBe('nhoJ');

  // Rangos y salud según el enunciado
  expect(extraterrestre.fuerza).toBeGreaterThanOrEqual(1);
  expect(extraterrestre.fuerza).toBeLessThanOrEqual(85);
  expect(extraterrestre.salud).toBe(150);
});

test('luchar debería reducir correctamente la salud del oponente cuando gana el Extraterrestre', () => {
  const extraterrestre = new Extraterrestre('John');
  const jugador = new Jugador('Jane', 50, 100);

  // Forzamos victoria del extraterrestre:
  // - maximizamos su fuerza dentro del rango permitido
  // - hacemos que Math.random devuelva 1 para cumplir: 1 * this.fuerza > jugador.fuerza
  const originalRandom = Math.random;
  Math.random = () => 1;
  extraterrestre.fuerza = 85;

  extraterrestre.luchar(jugador);

  expect(jugador.salud).toBe(15);     // 100 - 85 = 15
  expect(extraterrestre.salud).toBe(150); // la ganadora no pierde salud

  Math.random = originalRandom;
});

test('luchar debería manejar correctamente múltiples combates entre Extraterrestres', () => {
  const extraterrestre1 = new Extraterrestre('John');
  const extraterrestre2 = new Extraterrestre('Jane');

  const saludInicial1 = extraterrestre1.salud;
  const saludInicial2 = extraterrestre2.salud;

  // Varias luchas sin controlar el aleatorio
  for (let i = 0; i < 5; i++) {
    extraterrestre1.luchar(extraterrestre2);
  }

  // Al menos uno debe haber perdido salud
  const salud1Reducida = extraterrestre1.salud < saludInicial1;
  const salud2Reducida = extraterrestre2.salud < saludInicial2;

  expect(salud1Reducida || salud2Reducida).toBe(true);

  // Rango válido
  expect(extraterrestre1.salud).toBeGreaterThanOrEqual(0);
  expect(extraterrestre2.salud).toBeGreaterThanOrEqual(0);
});
