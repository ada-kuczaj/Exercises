// Function to find the longest element in the array
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

// Function to pad the rows to the right with spaces to ensure they all have the same length
function padRightToLength(word, length) {
    const padding = ' '.repeat(length - word.length);
    return word + padding;
}

// Function to transpose the matrix of strings
function transpose(matrix) {
    const maxLength = findLongestElement(matrix);
    const paddedMatrix = matrix.map(word => padRightToLength(word, maxLength));
    
    const transposed = [];
    for (let i = 0; i < maxLength; i++) {
        let row = '';
        for (let j = 0; j < paddedMatrix.length; j++) {
            row += paddedMatrix[j][i];
        }
        transposed.push(row);
    }

    // Trim trailing spaces in each row of the transposed output
    return transposed.map(row => row.replace(/\s+$/, ''));
}


// function transpose(input) {
//     // Step 1: Determine the length of the longest row
//     let maxLength = 0;
//     for (const row of input) {
//         if (row.length > maxLength) {
//             maxLength = row.length;
//         }
//     }

//     // Step 2: Pad all rows to the length of the longest row by adding spaces to the end
//     const paddedRows = input.map(row => row.padEnd(maxLength, ' '));

//     // Step 3: Transpose the matrix
//     const result = [];
//     for (let col = 0; col < maxLength; col++) {
//         let newRow = '';
//         for (let row = 0; row < paddedRows.length; row++) {
//             newRow += paddedRows[row][col];
//         }
//         // Push the new row without trimming the trailing spaces
//         result.push(newRow);
//     }

//     return result;
// }


module.exports = {
    findLongestElement,
    padRightToLength,
    transpose
}
