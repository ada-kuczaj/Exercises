function toRoman(arabicNumber) {
    const romanNumbers = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);

    let result = '';
    //this variable stores the current value of an Arabic number that has not yet been converted to Roman numerals
    let remaining = arabicNumber;

    for (let [value, numeral] of romanNumbers) {
        while (remaining >= value) {
            result += numeral;
            remaining -= value;
        }
    }

    return result;
}

module.exports = { toRoman };

