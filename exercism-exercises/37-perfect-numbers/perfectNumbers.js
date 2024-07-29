function isPrime(number) {
    if (number <= 1) {
        return false;
    } else if (number === 2 || number === 3 || number === 5) {
        return true;
    } else if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function classify(number) {
    if (number <= 0) {
        throw new Error('Classification is only possible for natural numbers.');
    }

    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        return 'perfect';
    } else if (sum > number) {
        return 'abundant';
    } else if (sum < number || isPrime(number)) {
        return 'deficient';
    }
}

module.exports = {
    classify
}
