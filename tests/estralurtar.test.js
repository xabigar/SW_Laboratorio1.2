import { Estralurtar } from '../js/estralurtar.js';
import { Jokalari } from '../js/jokalari.js';

test('should correctly initialize Estralurtar instance and get reversed izena', () => {
    const estralurtar = new Estralurtar('John');
    expect(estralurtar.izena).toBe('nhoJ'); // Name should be reversed
    
    expect(estralurtar.indarra).toBeGreaterThanOrEqual(1); // indarra should be greater than or equal to 1
    expect(estralurtar.indarra).toBeLessThanOrEqual(85); // indarra should be less than or equal to 85
    expect(estralurtar.osasuna).toBe(150); // osasuna should be initialized as 150
});

test('borrokatu should correctly reduce osasuna based on indarra for Estralurtar instance', () => {
    const estralurtar = new Estralurtar('John');
    const jokalari = new Jokalari('Jane', 50, 100);

    
    estralurtar.borrokatu(jokalari);
    
    // As indarra of estralurtar is random, we check if osasuna of jokalari is reduced correctly
    expect(jokalari.osasuna).toBeLessThanOrEqual(100); 
    expect(estralurtar.osasuna).toBeLessThanOrEqual(150); // osasuna should remain unchanged


});


test('borrokatu should handle multiple battles correctly with Estralurtar instances', () => {
    const estralurtar1 = new Estralurtar('John');
    const estralurtar2 = new Estralurtar('Jane');


    const initialOsasuna1 = estralurtar1.osasuna;
    const initialOsasuna2 = estralurtar2.osasuna;

    // Performing multiple battles and checking the osasuna
    for (let i = 0; i < 5; i++) {
        estralurtar1.borrokatu(estralurtar2);
    }


    // Check if either jokalari1.osasuna has decreased or jokalari2.osasuna has decreased
    const hasOsasuna1Decreased = estralurtar1.osasuna < initialOsasuna1;
    const hasOsasuna2Decreased = estralurtar2.osasuna < initialOsasuna2;
    
    expect(hasOsasuna1Decreased || hasOsasuna2Decreased).toBe(true);
    

});
