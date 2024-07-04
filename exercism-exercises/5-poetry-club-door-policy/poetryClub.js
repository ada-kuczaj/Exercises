function frontDoorResponse(poemLine) {
    let letter = poemLine[0];
    return letter;
}

function concatenationOfFirstLetters(poem) {
    let password = '';
    for (i = 0; i < poem.length; i++) {
        password += frontDoorResponse(poem[i]);
    }
    return password;
}

function frontDoorPassword(password) {
    let firstLetter = password[0].toUpperCase();
    let restOfTheWord = password.slice(1).toLowerCase();
    return firstLetter + restOfTheWord;
}

function backDoorResponse(poemLine) {
    poemLine = poemLine.trim();
    let letter = poemLine[poemLine.length - 1];
    return letter;
}

function concatenationOfLastLetters(poem) {
    let password = '';
    for (i = 0; i < poem.length; i++) {
        password += backDoorResponse(poem[i]);
    }
    return password;
}

function backDoorPassword(password) {
    let firstLetter = password[0].toUpperCase();
    let restOfTheWord = password.slice(1).toLowerCase();
    return firstLetter + restOfTheWord + ', please';
}

module.exports = {
    frontDoorResponse,
    frontDoorPassword,
    concatenationOfFirstLetters,
    backDoorResponse,
    concatenationOfLastLetters,
    backDoorPassword
}