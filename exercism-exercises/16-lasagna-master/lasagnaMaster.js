function cookingStatus(remainingTimeInTheOven) {
    if (remainingTimeInTheOven === 0) {
        return 'Lasagna is done.'
    } else if (remainingTimeInTheOven === undefined) {
        return 'You forgot to set the timer.'
    } else {
        return 'Not done, please wait.'
    }
}

function preparationTime(layers, preparationTimePerLayer) {
    if (preparationTimePerLayer !== undefined) {
        let numberOfLayers = layers.length;
        let preparationTime = numberOfLayers * preparationTimePerLayer;
        return preparationTime;
    } else {
        let numberOfLayers = layers.length;
        let preparationTime = numberOfLayers * 2;
        return preparationTime;
    }
}

function quantities(layers) {
    let fooAdditives = {
        noodles: 0,
        sauce: 0,
    }

    let numberOfNoodlesLayers = 0;
    let numberOfSauceLayers = 0;

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') {
            numberOfNoodlesLayers += 50;
        } else if (layers[i] === 'sauce')
            numberOfSauceLayers += 0.2;
    }

    fooAdditives.noodles = numberOfNoodlesLayers;
    fooAdditives.sauce = numberOfSauceLayers;

    return fooAdditives;
}

function addSecretIngredient(friendsIngredientsList, myIngredientsList) {
    let secretIngredient = friendsIngredientsList[friendsIngredientsList.length - 1];
    myIngredientsList.push(secretIngredient);
}

function scaleRecipe(twoPortionsReceipe, numberOfPortionsToCook) {
    let onePortionsReceipe = {};
    for (let key in twoPortionsReceipe) {
        if (twoPortionsReceipe.hasOwnProperty(key)) {
            onePortionsReceipe[key] = twoPortionsReceipe[key] / 2;
        }
    }
    let xPortionsReceipe = {};
    for (let key in onePortionsReceipe) {
        if (onePortionsReceipe.hasOwnProperty(key)) {
            xPortionsReceipe[key] = onePortionsReceipe[key] * numberOfPortionsToCook;
        }
    }
    return xPortionsReceipe;
}

module.exports = {
    cookingStatus,
    preparationTime,
    quantities,
    addSecretIngredient,
    scaleRecipe
}