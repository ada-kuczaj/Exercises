//second solution using mapping

function convert(number) {
    const sounds = [
        { divisor: 3, sound: 'Pling' },
        { divisor: 5, sound: 'Plang' },
        { divisor: 7, sound: 'Plong' }
    ];

    const result = sounds.reduce((accumulator, { divisor, sound }) => {
        if (number % divisor === 0) {
            accumulator += sound;
        }
        return accumulator;
    }, ''); // Wartość początkowa akumulatora jest pustym stringiem

    return result || number.toString();
}

module.exports = {
    convert
}