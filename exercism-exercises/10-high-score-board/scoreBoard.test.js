const { createScoreBoard, addPlayer, removePlayer, updateScore, applyMondayBonus, normalizeScore } = require('./scoreBoard')

test('creating a new high score board', () => {
    const expected = { 'The Best Ever': 1000000 };
    expect(createScoreBoard()).toEqual(expected);
});


test('adds a player and a score to the board', () => {
    const scoreBoard = {
        'Amil Pastorius': 99373,
        'Min-seo Shin': 0,
    };
    const expected = {
        'Amil Pastorius': 99373,
        'Min-seo Shin': 0,
        'Jesse Johnson': 1337,
    };
    const actual = addPlayer(scoreBoard, 'Jesse Johnson', 1337);
    expect(actual).toEqual(expected);
});

test('removes a player from the score board', () => {
    const scoreBoard = {
        'Amil Pastorius': 99373,
        'Min-seo Shin': 0,
        'Jesse Johnson': 1337,
    };
    const expected = {
        'Amil Pastorius': 99373,
        'Min-seo Shin': 0,
    };
    const actual = removePlayer(scoreBoard, 'Jesse Johnson');
    expect(actual).toEqual(expected);
    expect(Object.is(actual, scoreBoard)).toBe(true);
});

test('increses player\'s score', () => {
    const scoreBoard = {
        'Amil Pastorius': 99373,
        'Min-seo Shin': 0,
        'Jesse Johnson': 1337,
    };
    const expected = {
        'Amil Pastorius': 99373,
        'Min-seo Shin': 1999,
        'Jesse Johnson': 2674,
    };
    updateScore(scoreBoard, 'Min-seo Shin', 1999);
    const actual = updateScore(scoreBoard, 'Jesse Johnson', 1337);
    expect(actual).toEqual(expected);
    expect(Object.is(actual, scoreBoard)).toBe(true);
});

test('adds 100 points for all player\'s', () => {
    const scoreBoard = {
        'Amil Pastorius': 345,
        'Min-seo Shin': 19,
        'Jesse Johnson': 122,
    };
    const expected = {
        'Amil Pastorius': 445,
        'Min-seo Shin': 119,
        'Jesse Johnson': 222,
    };
    const actual = applyMondayBonus(scoreBoard);
    expect(actual).toEqual(expected);
    expect(Object.is(actual, scoreBoard)).toBe(true);
});

test('applies the normalization function', () => {
    const params = {
        score: 45,
        normalizeFunction: function (score) {
            return score * 3 - 10;
        },
    };
    expect(normalizeScore(params)).toEqual(125);
});

