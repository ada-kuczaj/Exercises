function getFirstCard(deck) {
    const [first, second, ...everythingElse] = deck;
    return first;
}

function getSecondCard(deck) {
    const [first, second, ...everythingElse] = deck;
    return second;
}

function swapTopTwoCards(deck) {
    const [first, second, ...everythingElse] = deck;
    return [second, first, ...everythingElse];
}

function discardTopCard(deck) {
    const [topCard, ...everythingElse] = deck;
    const restOfTheDeck = [...everythingElse];
    return [topCard, restOfTheDeck];
}

function insertFaceCards(deck) {
    const FACE_CARDS = ['jack', 'queen', 'king'];
    const [firstCard, ...restOfDeck] = deck;
    return [firstCard, ...FACE_CARDS, ...restOfDeck];
}


module.exports = {
    getFirstCard,
    getSecondCard,
    swapTopTwoCards,
    discardTopCard,
    insertFaceCards
}