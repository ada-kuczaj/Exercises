const knightIsAwake = false;
const archertIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = true;

function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake === false) {
        return true;
    } else {
        return false;
    };
}

function canSpy(knightIsAwake, archertIsAwake, prisonerIsAwake) {
    if (knightIsAwake === true || archertIsAwake === true || prisonerIsAwake === true) {
        return true;
    } else {
        return false;
    };
}

function canSignalPrisoner(archertIsAwake, prisonerIsAwake) {
    if (archertIsAwake === false && prisonerIsAwake === true) {
        return true;
    } else {
        return false;
    };
}

function canFreePrisoner(knightIsAwake, archertIsAwake, prisonerIsAwake, petDogIsPresent) {
    if (petDogIsPresent === true && archertIsAwake === false) {
        return true;
    } else if (petDogIsPresent === false && prisonerIsAwake === true && knightIsAwake === false && archertIsAwake === false) {
        return true;
    } else {
        return false;
    };
}

module.exports = {
    canExecuteFastAttack,
    canSpy,
    canSignalPrisoner,
    canFreePrisoner
};