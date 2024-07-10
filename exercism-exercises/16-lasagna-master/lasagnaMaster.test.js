const { cookingStatus, preparationTime, quantities, addSecretIngredient, scaleRecipe } = require('./lasagnaMaster')

test('cooking status when time is 0', () => {
    expect(cookingStatus(0)).toBe('Lasagna is done.');
});

test('cooking status when time is undefined', () => {
    expect(cookingStatus()).toBe('You forgot to set the timer.');
});

test('cooking status when time is larger than 0 minutes', () => {
    expect(cookingStatus(12)).toBe('Not done, please wait.');
});

test('check the preparation time', () => {
    expect(preparationTime(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'], 3)).toBe(18);
    expect(preparationTime(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'])).toBe(12);
});

test('calculate the number of noodles and sauce correctly in small lasagna', () => {
    expect(quantities(['noodles', 'sauce', 'noodles'])).toEqual({ noodles: 100, sauce: 0.2 });
});

test('calculate the number of noodles and sauce correctly in large lasagna', () => {
    expect(quantities([
        'sauce',
        'noodles',
        'béchamel',
        'meat',
        'mozzarella',
        'noodles',
        'ricotta',
        'eggplant',
        'béchamel',
        'noodles',
        'sauce',
        'mozzarella',
    ])).toEqual({ noodles: 150, sauce: 0.4 });
});

test('adding secret ingredient to the second array', () => {
    const friendsList = ['sauce', 'noodles', 'béchamel', 'marjoram'];
    const myList = ['sauce', 'noodles', 'meat', 'tomatoes'];
    addSecretIngredient(friendsList, myList);
    const expected = ['sauce', 'noodles', 'meat', 'tomatoes', 'marjoram'];
    expect(myList).toEqual(expected);
});

test('adding secret ingredient does not modify the first array', () => {
    const createFriendsList = () => [
        'noodles',
        'tomatoes',
        'sauce',
        'meat',
        'mozzarella',
        'eggplant',
        'ricotta',
        'parmesan',
    ];
    const friendsList = createFriendsList();
    const myList = ['ricotta', 'béchamel', 'sauce', 'noodles', 'meat'];
    addSecretIngredient(friendsList, myList);
    expect(friendsList).toEqual(createFriendsList());
});

test('adding secret ingredient does not return anything', () => {
    const friendsList = [
        'sauce',
        'noodles',
        'béchamel',
        'mozzarella',
        'mustard',
    ];
    const myList = ['sauce', 'noodles', 'tomatoes'];
    expect(addSecretIngredient(friendsList, myList)).toBeUndefined();
});

test('scales up correctly', () => {
    const recipe1 = {
        sauce: 0.5,
        noodles: 250,
        meat: 150,
        tomatoes: 3,
        onion: 0.5,
    };
    const expected1 = {
        sauce: 1.5,
        noodles: 750,
        meat: 450,
        tomatoes: 9,
        onion: 1.5,
    };
    expect(scaleRecipe(recipe1, 6)).toEqual(expected1);
});

test('scales down correctly', () => {
    const recipe = {
        sauce: 0.5,
        noodles: 250,
        meat: 150,
        tomatoes: 3,
        onion: 0.5,
    };
    const expected = {
        sauce: 0.25,
        noodles: 125,
        meat: 75,
        tomatoes: 1.5,
        onion: 0.25,
    };
    expect(scaleRecipe(recipe, 1)).toEqual(expected);
});

test('works for an empty recipe', () => {
    expect(scaleRecipe({})).toEqual({});

});

test('does not modify the original recipe', () => {
    const recipe = {
        sauce: 1,
        noodles: 250,
        meat: 150,
        tomatoes: 3,
        onion: 2,
    };
    const copy = { ...recipe };
    scaleRecipe(recipe, 4);
    expect(recipe).toEqual(copy);

});
