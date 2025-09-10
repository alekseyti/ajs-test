import { showHP } from '../src/app.js';

test.each([
    ['healthy', {name: 'Маг', health: 90}, 'healthy'],
    ['wounded', {name: 'Воин', health: 40}, 'wounded'],
    ['critical', {name: 'Лучник', health: 10}, 'critical']
])(
    ('should show color HP in case health %p'),
    (_, health, expected) => {
        const hp = showHP(health);
        expect(hp).toBe(expected);
    }
)