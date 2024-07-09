function ageOnPlanet(planet, ageInSeconds) {

    //Conversion of age in seconds to Earth years
    let ageInEarthYears = ageInSeconds / 31557600;

    //conversion of age into years of a given planet.
    let planetYears;

    switch (planet) {
        case 'mercury':
            planetYears = ageInEarthYears / 0.2408467;
            break;
        case 'venus':
            planetYears = ageInEarthYears / 0.61519726;
            break;
        case 'earth':
            planetYears = ageInEarthYears / 1.0;
            break;
        case 'mars':
            planetYears = ageInEarthYears / 1.8808158;
            break;
        case 'jupiter':
            planetYears = ageInEarthYears / 11.862615;
            break;
        case 'saturn':
            planetYears = ageInEarthYears / 29.447498;
            break;
        case 'uranus':
            planetYears = ageInEarthYears / 84.016846;
            break;
        case 'neptune':
            planetYears = ageInEarthYears / 164.79132;
            break;
        default:
            return 'Unknown planet';
    }

    return Number(planetYears.toFixed(2));
}

module.exports = {
    ageOnPlanet
}