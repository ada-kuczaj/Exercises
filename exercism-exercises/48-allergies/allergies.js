class Allergies {
    constructor(score) {
        this.score = score;
        this.alergens = this.initializeAlergensMap();

    }

    initializeAlergensMap() {

        const alergens = new Map([
            [128, 'cats'],
            [64, 'pollen'],
            [32, 'chocolate'],
            [16, 'tomatoes'],
            [8, 'strawberries'],
            [4, 'shellfish'],
            [2, 'peanuts'],
            [1, 'eggs'],
        ])
        return alergens;
    }

    list() {
      
    }

    allergicTo(alergen) {
       
    }
}

module.exports = {
    Allergies
}