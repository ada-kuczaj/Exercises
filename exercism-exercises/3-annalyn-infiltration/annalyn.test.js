const { canExecuteFastAttack, canSpy, canSignalPrisoner, canFreePrisoner } = require('./annalyn');

test('executing a fast attack when knight is not awake', () => {
    const knightIsAwake = false;
    expect(canExecuteFastAttack(knightIsAwake)).toBe(true);
});

test('not executing a fast attack when knight is awake', () => {
    const knightIsAwake = true;
    expect(canExecuteFastAttack(knightIsAwake)).toBe(false);
});

test('spying when any of knight, archer, or prisoner is awake', () => {
    const knightIsAwake = false;
    const archertIsAwake = true;
    const prisonerIsAwake = false;
    expect(canSpy(knightIsAwake, archertIsAwake, prisonerIsAwake)).toBe(true);
});

test('signaling the prisoner when the archer is sleeping', () => {
    const archertIsAwake = false;
    const prisonerIsAwake = true;
    expect(canSignalPrisoner(archertIsAwake, prisonerIsAwake)).toBe(true);
});

test('freeing a prisoner with a dog', () => {
    const petDogIsPresent = true;
    const knightIsAwake = true;
    const archertIsAwake = false;
    const prisonerIsAwake = false;
    expect(canSpy(knightIsAwake, archertIsAwake, prisonerIsAwake, petDogIsPresent)).toBe(true);
});

test('freeing a prisoner without a dog', () => {
    const petDogIsPresent = false;
    const knightIsAwake = false;
    const archertIsAwake = false;
    const prisonerIsAwake = true;
    expect(canSpy(knightIsAwake, archertIsAwake, prisonerIsAwake, petDogIsPresent)).toBe(true);
});