function gigasecond(date) {
    // Step 1: Calculate the gigasecond in milliseconds
    const GIGASECOND_IN_MILLISECONDS = 1_000_000_000 * 1000;

    // Step 2: Add the gigasecond to the given timestamp
    let newTimestamp = new Date(date.getTime() + GIGASECOND_IN_MILLISECONDS);

    // Step 3: Return the new date
    return newTimestamp;
}

module.exports = {
    gigasecond
}