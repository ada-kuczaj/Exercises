function rotate(text, shift) {
    shift = shift % 26;

    let letters = text.split('');

    //Map returns a new array, so we need to assign the map result to a new variable.
    let result = letters.map(char => {

        // We check whether the character is a letter
        if (char.match(/[a-z]/i)) {

            // Determine whether it is a lowercase or uppercase letter
            //If the character is an uppercase letter, the base is 65 (ASCII code for 'A'), if not the base is 97 (ASCII code for 'a').
            const charCode = char.charCodeAt(0);
            const base = charCode >= 65 && charCode <= 90 ? 65 : 97;

            // Shift by x places, keep lowercase/uppercase
            const newChar = String.fromCharCode(((charCode - base + shift) % 26) + base);
            return newChar;

        }
        return char;

    })

    return result.join('');

}

module.exports = {
    rotate
}