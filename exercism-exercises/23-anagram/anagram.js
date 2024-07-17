function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    //if words have the same letter order, they are not anagrams
    if (str1 === str2) {
        return false;
    }
    //we reject words with a different number of letters than targetWord
    if (str1.length !== str2.length) {
        return false;
    }

    // Initialize an array of length 128, filled with zeros
    const charCount = new Array(128).fill(0);

    //increments or decrements the counter in the charCount array for the given ASCII code (i position) by 1
    //if both strings have the same characters in any order, the increment and decrement 
    //counters for the same characters will eventually balance to zero.
    for (let i = 0; i < str1.length; i++) {
        charCount[str1.charCodeAt(i)]++;
        charCount[str2.charCodeAt(i)]--;
    }

    // checking whether all values ​​in the array are zeros
    for (let count of charCount) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}

function findAnagrams(targetWord, candidateWords) {
    const targetLower = targetWord.toLowerCase();
    const result = [];

    //candidate is a variable that takes the value of each element of the array during each iteration
    for (const candidate of candidateWords) {
        if (areAnagrams(targetLower, candidate.toLowerCase())) {
            result.push(candidate);
        }
    }

    return result;
}

module.exports = {
    findAnagrams
}