function isPangram(string) {
    if (string.length === 0) {
        return false;
    }

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase();
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            alphabet.splice(index, 1);
        }
        if (alphabet.length === 0) {
            return true;
        }
    }

    return alphabet.length === 0;
}

module.exports = {
    isPangram
}
