const decodedValue = (colorsArray) => {
    
    let result = `${COLORS.indexOf(colorsArray[0])}${COLORS.indexOf(colorsArray[1])}`;
    return parseInt(result);

};

const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
];

module.exports = {
    decodedValue,
    COLORS
}