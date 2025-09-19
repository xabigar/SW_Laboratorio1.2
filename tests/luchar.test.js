import { Humano } from '../js/humano.js';
import { Maquina } from '../js/maquina.js';
import { Extraterrestre } from '../js/extraterrestre.js';


test('should conduct a tournament and determine a winner', () => {
    // 1. Initialize Instances
    let players = [];
    for (let i = 1; i <= 50; i++) {
        players.push(new Maquina(`m${i}`));
        players.push(new Humano(`g${i}`));
        players.push(new Extraterrestre(`e${i}`));
    }

    // 2. Shuffle Array
    players.sort(() => Math.random() - 0.5);

    // 3. Battle Rounds
    while (players.length > 1) {
        // Conduct battles in pairs
        for (let i = 0; i < players.length-1; i += 2) {
            players[i].luchar(players[i + 1]);
        }
        
        // Filter out players with salud <= 0 directly
        players = players.filter(player => player.salud > 0);
        
        // Shuffle for the next round
        players.sort(() => Math.random() - 0.5);
    }

    // 4. Assertions
    expect(players.length).toBe(1); // Only one player should remain
    expect(players[0].salud).toBeGreaterThan(0); // The remaining player should have salud > 0
});
