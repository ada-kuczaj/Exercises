const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

/* 
 Determines the number of minutes the lasagna still needs to remain in the
 oven to be properly prepared.
*/
function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}


//Given a number of layers, determines the total preparation time.
function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/*
 Calculates the total working time. That is, the time to prepare all the layers
 of lasagna, and the time already spent in the oven.
 */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}


module.exports = {
  EXPECTED_MINUTES_IN_OVEN,
  PREPARATION_MINUTES_PER_LAYER,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes
};