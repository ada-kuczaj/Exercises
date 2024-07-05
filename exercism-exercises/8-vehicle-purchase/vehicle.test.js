const { needsLicense, chooseVehicle, calculateResellPrice } = require('./vehicle')

test('check if driver license needed', () => {
    expect(needsLicense('car')).toBe(true);
    expect(needsLicense('truck')).toBe(true);
    expect(needsLicense('bike')).toBe(false);
});

test('check if driver license needed', () => {
    expect(chooseVehicle('Toyota', 'Volkswagen')).toBe('Toyota is clearly the better choice.');
    expect(chooseVehicle('Bugatti', 'Ford')).toBe('Bugatti is clearly the better choice.');
    expect(chooseVehicle('2020 Gazelle Medeo', '2018 Bergamont City')).toBe('2018 Bergamont City is clearly the better choice.');
});

test('check if driver license needed', () => {
    expect(calculateResellPrice(1000, 1)).toBe(800);
    expect(calculateResellPrice(1000, 5)).toBe(700);
    expect(calculateResellPrice(1000, 15)).toBe(500);
});