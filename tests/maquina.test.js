import { Maquina } from '../js/maquina.js';
import { Jugador } from '../js/jugador.js';

describe('Maquina', () => {
  test('debería inicializar correctamente una instancia de Maquina', () => {
    const maquina = new Maquina('m1');

    // nombre base y getter
    expect(maquina.nombre).toBe('m1');

    // rangos según enunciado
    expect(maquina.fuerza).toBeGreaterThanOrEqual(1);
    expect(maquina.fuerza).toBeLessThanOrEqual(100);
    expect(maquina.salud).toBe(130);
  });

  test('luchar debería reducir correctamente la salud del oponente cuando la Maquina gana', () => {
    const maquina = new Maquina('mx');
    const oponente = new Jugador('Ana', 50, 100);

    // Forzamos una victoria segura de la máquina:
    // - ponemos su fuerza al máximo
    // - hacemos que Math.random devuelva 1 para cumplir: 1 * this.fuerza > oponente.fuerza
    const originalRandom = Math.random;
    Math.random = () => 1;
    maquina.fuerza = 100;

    maquina.luchar(oponente);

    expect(oponente.salud).toBe(0);      // 100 - 100 = 0
    expect(maquina.salud).toBe(130);     // la salud de la ganadora no cambia

    Math.random = originalRandom;
  });

  test('luchar debería manejar correctamente múltiples combates entre Máquinas', () => {
    const m1 = new Maquina('m1');
    const m2 = new Maquina('m2');

    const saludInicial1 = m1.salud;
    const saludInicial2 = m2.salud;

    for (let i = 0; i < 5; i++) {
      m1.luchar(m2);
    }

    const m1PerdioSalud = m1.salud < saludInicial1;
    const m2PerdioSalud = m2.salud < saludInicial2;

    // Al menos uno debe haber perdido salud
    expect(m1PerdioSalud || m2PerdioSalud).toBe(true);

    // En todo momento deben mantenerse en rangos válidos
    expect(m1.salud).toBeGreaterThanOrEqual(0);
    expect(m2.salud).toBeGreaterThanOrEqual(0);
  });

  test('fuerza de Maquina debe estar siempre en el rango 1–100 (muestreo)', () => {
    // Test de muestreo para detectar salidas de rango accidentales
    for (let i = 0; i < 50; i++) {
      const m = new Maquina(`m${i + 1}`);
      expect(m.fuerza).toBeGreaterThanOrEqual(1);
      expect(m.fuerza).toBeLessThanOrEqual(100);
    }
  });
});
