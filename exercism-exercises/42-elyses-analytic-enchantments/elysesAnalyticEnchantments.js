function getCardPosition(stack, card) {
    return stack.findIndex(item => item === card);
}

function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
}

function isEachCardEven(stack) {
    return stack.every((card) => card % 2 === 0);
}

function doesStackIncludeOddCard(stack) {
    return stack.some((card) => card % 2 !== 0);
}

function getFirstOddCard(stack) {
    return stack.find((card) => card % 2 !== 0);
}

function getFirstEvenCardPosition(stack) {
    return stack.findIndex((card) => card % 2 === 0);
}

module.exports = {
    getCardPosition,
    doesStackIncludeCard,
    isEachCardEven,
    doesStackIncludeOddCard,
    getFirstOddCard,
    getFirstEvenCardPosition
}