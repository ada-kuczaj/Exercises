class Robot {
    constructor() {
        this._name = this.generateName();
    }

    static usedNames = new Set();

    get name() {
        return this._name;
    }

    set name(newName) {
        throw new Error('Robot name cannot be modified directly.');
    }

    generateName() {
        const generateNewName = () => {
            const letter1 = getRandomUpperCaseLetter();
            const letter2 = getRandomUpperCaseLetter();
            const number1 = getRandomNumber();
            const number2 = getRandomNumber();
            const number3 = getRandomNumber();
            return letter1 + letter2 + number1 + number2 + number3;
        };

        let newName = generateNewName();
        while (Robot.usedNames.has(newName)) {
            newName = generateNewName();
        }
        Robot.usedNames.add(newName);
        return newName;
    }

    reset() {
        Robot.usedNames.add(this._name);
        this._name = this.generateName();
    }

    static releaseNames() {
        Robot.usedNames.clear();
    }
}

function getRandomUpperCaseLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

module.exports = {
    Robot
}
