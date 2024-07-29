class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get isTriangle() {
        if (this.a === 0 && this.b === 0 && this.c === 0) {
            return false;
        }
        if (this.a + this.b >= this.c && this.b + this.c >= this.a && this.a + this.c >= this.b) {
            return true;
        }
    }
    //has all three sides the same length
    get isEquilateral() {
        if (this.isTriangle) {
            if (this.a === this.b && this.b === this.c) {
                return true;
            }
        }
        return false;
    }
    //has at least two sides the same length
    get isIsosceles() {
        if (this.isTriangle) {
            if (this.a === this.b || this.b === this.c || this.c === this.a) {
                return true;
            }
        }
        return false;
    }
    //has all sides of different lengths
    get isScalene() {
        if (this.isTriangle) {
            if (this.a !== this.b && this.b !== this.c && this.c !== this.a) {
                return true;
            }
        }
        return false;
    }
}

module.exports = {
    Triangle
}
