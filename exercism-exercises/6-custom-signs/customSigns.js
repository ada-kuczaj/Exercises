function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!`;
}


function buildBirthdaySign(age) {
    let ageing = age >= 50 ? 'mature' : 'young'
    return `Happy Birthday! What a ${ageing} fellow you are.`;
}


function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`;
}

function costOf(sign, currency) {
    const basePrice = 20;
    let numberOfLetters = sign.length;
    let signPrice = basePrice + numberOfLetters * 2;
    return `Your sign costs ${signPrice.toFixed(2)} ${currency}.`;
}


module.exports = {
    buildSign,
    buildBirthdaySign,
    graduationFor,
    costOf
}