function twoFer(personName) {
    if (personName !== undefined) {
        return `One for ${personName}, one for me.`
    } else {
        return `One for you, one for me.`
    }
}

module.exports = {
    twoFer
}