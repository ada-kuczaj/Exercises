function isPaired(text) {
    for (let i = 0; i < text.length; i++) {

        //checking the number of pairs of brackets out of correct order
        bracketsNumber = 0; // []
        bracesNumber = 0; // {}
        parenthesesNumber = 0; // ()

        if (text[i] === '[') {
            bracketsNumber += 1;
        }
        if (text[i] === '{') {
            bracesNumber += 1;
        }
        if (text[i] === '(') {
            parenthesesNumber += 1;
        }


        if (text[i] === ']') {
            bracketsNumber -= 1;
        }
        if (text[i] === '}') {
            bracesNumber -= 1;
        }
        if (text[i] === ')') {
            parenthesesNumber -= 1;
        }

    }
    return (bracketsNumber === 0 && bracesNumber === 0 && parenthesesNumber === 0) ? true : false;
}

module.exports = {
    isPaired
}