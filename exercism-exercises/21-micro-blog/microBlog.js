// function truncate(text) {
//     let result = '';
//     let count = 0;

//     for (const char of text) {
//         if (count < 5) {
//             result += char;
//             count++;
//         } else {
//             break;
//         }
//     }

//     return result;
// }

function truncate(str) {
    return [...str].slice(0, 5).join('');
}

module.exports = {
    truncate
}