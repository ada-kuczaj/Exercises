//1. Determine the elements with maximum length 
function findLongestElement(input) {
    if (input.length === 0) {
        return null;
    }

    let longestElement = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i].length > longestElement.length) {
            longestElement = input[i];
        }
    }

    return longestElement.length;
}

//2.Pad the rows to the left with spaces to ensure they all have the same length
function padLeftToLength(word, length) {
    const padding = ' '.repeat(length - word.length);
    return padding + word;
}


// // Function to transpose the matrix of strings
// function transpose(array) {
//     const maxLength = findLongestElement(matrix);
//     const paddedMatrix = matrix.map(word => padLeftToLength(word, maxLength));
    
//     const transposed = [];
//     for (let i = 0; i < maxLength; i++) {
//         let row = '';
//         for (let j = 0; j < paddedMatrix.length; j++) {
//             row += paddedMatrix[j][i];
//         }
//         transposed.push(row);
//     }

//     return transposed;
// }

module.exports = {
    findLongestElement,
    padLeftToLength,
    transpose
}