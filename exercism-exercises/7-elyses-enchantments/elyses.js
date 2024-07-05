//return the card at index position from the given stack
function getItem(deck, position) {
    return deck[position];
}

//exchange the card at index position with the replacement card provided
function setItem(deck, position, replacementCard) {
    deck.splice(position, 1, replacementCard);
    return deck;
}

function insertItemAtTop(deck, newCard) {
    deck.push(newCard);
    return deck
}

function removeItem(deck, position) {
    deck.splice(position, 1);
    return deck;
}

function removeItemFromTop(deck) {
    deck.pop();
    return deck;
}

function insertItemAtBottom(deck, newCard) {
    deck.unshift(newCard);
    return deck;
}

function removeItemAtBottom(deck) {
    deck.shift();
    return deck;
}

function checkSizeOfStack(deck, stackSize) {
    return deck.length === stackSize ? true : false;
}

module.exports = {
    getItem,
    setItem,
    insertItemAtTop,
    removeItem,
    removeItemFromTop,
    insertItemAtBottom,
    removeItemAtBottom,
    checkSizeOfStack

}