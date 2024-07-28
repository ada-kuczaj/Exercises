const abilityModifier = (score) => {
    if (score < 3) throw new Error('Ability scores must be at least 3');
    if (score > 18) throw new Error('Ability scores can be at most 18');
    return Math.floor((score - 10) / 2);
};

class Character {
    constructor() {
        this._strength = Character.rollAbility();
        this._dexterity = Character.rollAbility();
        this._constitution = Character.rollAbility();
        this._intelligence = Character.rollAbility();
        this._wisdom = Character.rollAbility();
        this._charisma = Character.rollAbility();
        this._hitpoints = 10 + abilityModifier(this.constitution);
    }

    static rollAbility() {
        const rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls.sort();
        return rolls[0] + rolls[1] + rolls[2];
    }

    get strength() {
        return this._strength;
    }

    get dexterity() {
        return this._dexterity;
    }

    get constitution() {
        return this._constitution;
    }

    get intelligence() {
        return this._intelligence;
    }

    get wisdom() {
        return this._wisdom;
    }

    get charisma() {
        return this._charisma;
    }

    get hitpoints() {
        return this._hitpoints;
    }
}

module.exports = {
    Character,
    abilityModifier
}


