class Squares {
    constructor(nNaturalNumbers) {
        this.nNaturalNumbers = nNaturalNumbers;
    }

    get nNaturalNumbersArray() {
        let arrayOfNumbers = [];
        for (let i = 1; i <= this.nNaturalNumbers; i++) {
            arrayOfNumbers.push(i);
        }
        return arrayOfNumbers;
    }

    get sumOfSquares() {
        let sumOfSquares = 0;
        for (let number of this.nNaturalNumbersArray) {
            let numberPower = number ** 2;
            sumOfSquares += numberPower;
        }
        return sumOfSquares;
    }

    get squareOfSum() {
        let naturalNumbersSum = 0;
        for (let number of this.nNaturalNumbersArray) {
            naturalNumbersSum += number;
        }
        let squareOfSum = naturalNumbersSum ** 2;
        return squareOfSum;
    }

    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}

module.exports = {
    Squares
}
