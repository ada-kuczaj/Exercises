function truncate(text) {
    let result = '';
    let count = 0;

    for (const char of text) {
        if (count < 5) {
            result += char;
            count++;
        } else {
            break;
        }
    }

    return result;
}

//second, shorter solution
// function truncate(str) {
//     return [...str].slice(0, 5).join('');
// }
//In the example above, we use the spread operator (...) to split the string into 
//code points, then shorten it to 5 characters and concatenate them back into the string.

module.exports = {
    truncate
}