const { ageOnPlanet } = require('./spaceAge')

test('ageOnPlanet on Earth', () => {
    expect(ageOnPlanet('earth', 1000000000)).toEqual(31.69);
});
test('ageOnPlanet on Mercury', () => {
    expect(ageOnPlanet('mercury', 2134835688)).toEqual(280.88);
});
test('ageOnPlanet on Venus', () => {
    expect(ageOnPlanet('venus', 189839836)).toEqual(9.78);
});
test('ageOnPlanet on Mars', () => {
    expect(ageOnPlanet('mars', 2129871239)).toEqual(35.88);
});
test('ageOnPlanet on Jupiter', () => {
    expect(ageOnPlanet('jupiter', 901876382)).toEqual(2.41);
});
test('ageOnPlanet on Saturn', () => {
    expect(ageOnPlanet('saturn', 2000000000)).toEqual(2.15);
});
test('ageOnPlanet on Uranus', () => {
    expect(ageOnPlanet('uranus', 1210123456)).toEqual(0.46);
});
test('ageOnPlanet on Neptune', () => {
    expect(ageOnPlanet('neptune', 1821023456)).toEqual(0.35);
});
