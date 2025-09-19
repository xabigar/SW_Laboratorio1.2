import { Gizaki } from '../js/gizaki.js';
import { Makina } from '../js/makina.js';
import { Estralurtar } from '../js/estralurtar.js';


test('should conduct a tournament and determine a winner', () => {
    // 1. Initialize Instances
    let players = [];
    for (let i = 1; i <= 50; i++) {
        players.push(new Makina(`m${i}`));
        players.push(new Gizaki(`g${i}`));
        players.push(new Estralurtar(`e${i}`));
    }

    // 2. Shuffle Array
    players.sort(() => Math.random() - 0.5);

    // 3. Battle Rounds
    while (players.length > 1) {
        // Conduct battles in pairs
        for (let i = 0; i < players.length-1; i += 2) {
            players[i].borrokatu(players[i + 1]);
        }
        
        // Filter out players with osasuna <= 0 directly
        players = players.filter(player => player.osasuna > 0);
        
        // Shuffle for the next round
        players.sort(() => Math.random() - 0.5);
    }

    // 4. Assertions
    expect(players.length).toBe(1); // Only one player should remain
    expect(players[0].osasuna).toBeGreaterThan(0); // The remaining player should have osasuna > 0
});
