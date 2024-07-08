function timeTiMixJuice(juice) {
    switch (juice) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
            return 1.5;
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}

function limesToCut(slicesNeeded, limes) {

    let currentFruit = 0;
    let slicedLimes = 0;
    while (slicesNeeded > slicedLimes && currentFruit < limes.length) {
        switch (limes[currentFruit]) {
            case 'small':
                slicedLimes += 6;
                break;
            case 'medium':
                slicedLimes += 8;
                break;
            case 'large':
                slicedLimes += 10;
                break;
        };

        currentFruit += 1;
    };
    return currentFruit;
}
// SECOND SOLUTION WITH OBJECT:

// function limeToCut(slicesNeeded, limes) {
//    
//     const limeSlices = {
//         'small': 6,
//         'medium': 8,
//         'large': 10
//     };

//     let totalSlices = 0;
//     let limesCut = 0;

//     for (let i = 0; i < limes.length; i++) {
//         if (totalSlices >= slicesNeeded) {
//             break;
//         }
//         totalSlices += limeSlices[limes[i]];
//         limesCut++;
//     }

//     return limesCut;
// }


function remainingOrders(timeLeft, remainingOrders) {

    currentIndex = 0;
    while (timeLeft > 0 && currentIndex < remainingOrders.length) {

        let timeNeeded = timeTiMixJuice(remainingOrders[currentIndex]);
        timeLeft -= timeNeeded;
        currentIndex++;
    }
    // with slice() we can get all orders starting from a specific index to the end of the array
    return remainingOrders.slice(currentIndex);
}

module.exports = {
    timeTiMixJuice,
    limesToCut,
    remainingOrders
}