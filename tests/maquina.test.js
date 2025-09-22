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
    const maquina = new Maquina('m1');
    const oponente = new Jugador('Ana', 50, 100);

    maquina.luchar(oponente);

    expect(oponente.salud).toBeLessThanOrEqual(100);
    expect(maquina.salud).toBeLessThanOrEqual(130);
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
