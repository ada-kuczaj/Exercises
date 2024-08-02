class ResistorColorTrio {
    constructor(colorsArray) {
        this.colorsArray = colorsArray;
        this.colorsMap = this.initializeColorsNumbersMap();
        this.zeroPrefixMap = this.initializeZeroPrefixMap();
        this.label = this.createLabel();
    }

    initializeColorsNumbersMap() {
        const colorsNumbersMap = new Map([
            ['black', 0],
            ['brown', 1],
            ['red', 2],
            ['orange', 3],
            ['yellow', 4],
            ['green', 5],
            ['blue', 6],
            ['violet', 7],
            ['grey', 8],
            ['white', 9],
        ])
        return colorsNumbersMap;
    }

    initializeZeroPrefixMap() {
        const zeroPrefixMap = new Map([
            [0, { multiplier: '', unit: ' ohms' }],
            [1, { multiplier: '0', unit: ' ohms' }],
            [2, { multiplier: '00', unit: ' ohms' }],
            [3, { multiplier: '', unit: ' kiloohms' }],
            [4, { multiplier: '0', unit: ' kiloohms' }],
            [5, { multiplier: '00', unit: ' kiloohms' }],
            [6, { multiplier: '', unit: ' megaohms' }],
            [7, { multiplier: '0', unit: ' megaohms' }],
            [8, { multiplier: '00', unit: ' megaohms' }],
            [9, { multiplier: '', unit: ' gigaohms' }]
        ]);

        return zeroPrefixMap;
    }

    createLabel() {
        if (this.colorsArray.length !== 3) {
            throw new Error('Invalid number of colors');
        }

        for (let color of this.colorsArray) {
            if (!this.colorsMap.has(color)) {
                throw new Error('/invalid color/');
            }
        }

        let firstDigit = this.colorsMap.get(this.colorsArray[0]);
        let secondDigit = this.colorsMap.get(this.colorsArray[1]);
        let number = parseInt(`${firstDigit}${secondDigit}`);
        let zeroNumber = this.colorsMap.get(this.colorsArray[2]);
        let { multiplier, unit } = this.zeroPrefixMap.get(zeroNumber);

        if (secondDigit === 0) {
            return `Resistor value: ${firstDigit} kiloohms`;
        } else {
            return `Resistor value: ${number}${multiplier}${unit}`;
        }
    }
}

module.exports = {
    ResistorColorTrio
}


