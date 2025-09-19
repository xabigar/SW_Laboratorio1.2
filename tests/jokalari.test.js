import { Jokalari } from '../js/jokalari.js';

test('should correctly initialize Jokalari instance and get izena', () => {
    const jokalari = new Jokalari('John', 10, 100);
    expect(jokalari.izena).toBe('John');
    // Additional assertions can be added to check the other properties
});


test('borrokatu should correctly reduce osasuna based on indarra', () => {
    const jokalari1 = new Jokalari('John', 12, 100);
    const jokalari2 = new Jokalari('Jane', 5, 100);
    
    // Mocking Math.random to control the outcome of the battle
    const originalRandom = Math.random;
    Math.random = () => 0.5; // This will make jokalari1 win the battle
    
    jokalari1.borrokatu(jokalari2);
    
    expect(jokalari2.osasuna).toBe(88); // osasuna should be reduced by jokalari1's indarra
    expect(jokalari1.osasuna).toBe(100); // osasuna should remain unchanged

    // Resetting Math.random to its original implementation
    Math.random = originalRandom;
});


test('borrokatu should handle multiple battles correctly', () => {
    const jokalari1 = new Jokalari('John', 10, 100);
    const jokalari2 = new Jokalari('Jane', 5, 100);

    // Performing multiple battles and checking the osasuna
    for (let i = 0; i < 5; i++) {
        jokalari1.borrokatu(jokalari2);
    }

    // Here, we are not controlling Math.random, so we cannot predict the exact outcome.
    // We can only check if the osasuna values are within valid ranges.
    expect(jokalari1.osasuna).toBeGreaterThanOrEqual(0);
    expect(jokalari2.osasuna).toBeGreaterThanOrEqual(0);
});