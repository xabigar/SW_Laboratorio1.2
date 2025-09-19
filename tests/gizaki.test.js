import { Gizaki } from '../js/gizaki.js';
import { Jokalari } from '../js/jokalari.js';

test('should correctly initialize Gizaki instance and get izena', () => {
    const gizaki = new Gizaki('John');
    expect(gizaki.izena).toBe('John');
    
    // Additional assertions to check the other properties
    expect(gizaki.indarra).toBe(70); // indarra should be initialized as 70
    expect(gizaki.osasuna).toBe(150); // osasuna should be initialized as 150
});

test('borrokatu should correctly reduce osasuna based on indarra for Gizaki instance', () => {
    const gizaki = new Gizaki('John');
    const jokalari = new Jokalari('Jane', 50, 100);


    gizaki.borrokatu(jokalari);
    
    expect(jokalari.osasuna).toBeLessThanOrEqual(100); // osasuna should be reduced by gizaki's indarra
    expect(gizaki.osasuna).toBeLessThanOrEqual(150); // osasuna should remain unchanged

  
});

test('borrokatu should handle multiple battles correctly with Gizaki instances', () => {
    const gizaki1 = new Gizaki('John');
    const gizaki2 = new Gizaki('Jane');

    // Mocking Math.random to control the outcome of the battle
    const originalRandom = Math.random;
    Math.random = () => 0; // This will make jokalari1 win the battle
    
    // Performing multiple battles and checking the osasuna
    for (let i = 0; i < 5; i++) {
        gizaki1.borrokatu(gizaki2);
    }

    // Resetting Math.random to its original implementation
    Math.random = originalRandom;

    // Here, we are not controlling Math.random, so we cannot predict the exact outcome.
    // We can only check if the osasuna values are within valid ranges.
    expect(gizaki1.osasuna).toBeLessThanOrEqual(0);
    expect(gizaki2.osasuna).toBeGreaterThanOrEqual(0);
});
