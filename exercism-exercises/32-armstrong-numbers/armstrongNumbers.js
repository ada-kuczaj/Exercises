function isArmstrongNumber(number) {

    let numberString = number.toString();
    let power = numberString.length;
    let digits = numberString.split(''); // => array of digits that are strings

    // Converting individual digits back to numbers
    digits = digits.map(digit => parseInt(digit, 10));

    let exponentiationResults = 0;

    for (let i = 0; i <= digits.length - 1; i++) {

        let exponentiation = digits[i] ** power;
        exponentiationResults += exponentiation;
    }

    return exponentiationResults === number ? true : false;
}

module.exports = {
    isArmstrongNumber
}