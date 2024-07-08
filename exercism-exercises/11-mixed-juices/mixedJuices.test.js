const { timeTiMixJuice, limesToCut, remainingOrders } = require('./mixedJuices')


test('how long it takes to mix particular juice', () => {
    expect(timeTiMixJuice('Pure Strawberry Joy')).toBe(0.5);
    expect(timeTiMixJuice('Energizer')).toBe(1.5);
    expect(timeTiMixJuice('Green Garden')).toBe(1.5);
    expect(timeTiMixJuice('Tropical Island')).toBe(3);
    expect(timeTiMixJuice('All or Nothing')).toBe(5);
    expect(timeTiMixJuice('Other')).toBe(2.5);
});


test('how many limes to cut', () => {
    expect(limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])).toBe(4);
    expect(limesToCut(42, ['small', 'large', 'large', 'medium', 'small', 'large', 'large', 'medium'])).toBe(6);
    expect(limesToCut(4, ['medium', 'small'])).toBe(1);
    expect(limesToCut(10, [])).toBe(0);
});

test('how many drinks she can make by the end of the shift', () => {
    expect(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])).toEqual(['Green Garden']);
});