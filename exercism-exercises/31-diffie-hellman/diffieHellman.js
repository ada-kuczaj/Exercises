class DiffieHellman {

    constructor(p, g) {
        this.p = p;
        this.g = g;
        this.generatePrivateKeys();
    }

    generatePrivateKeys() {
        this.validate();

        this.a = Math.floor(Math.random() * this.p) + 1;
        this.b = Math.floor(Math.random() * this.p) + 1;
    }

    generatePublicKeys() {
        this.A = ((g ** this.a) % this.p);
        this.B = ((g ** this.b) % this.p);
    }

    calculateSecretAlice() {
        this.sa = ((B ** this.a) % this.p);
    }

    calculateSecretBob() {
        this.sb = ((A ** this.b) % this.p);
    }

    getPublicKey(privateKey) {
        if(privateKey < 2 || privateKey >= this.p){
            throw new Error('Invalid private key: ' + privateKey);
        }
        return ((this.g ** privateKey) % this.p);
    }

    getSecret(theirPublicKey, myPrivateKey) {
        return ((theirPublicKey ** myPrivateKey) % this.p);
    }

    validate() {

        if (DiffieHellman.isPrime(this.p) === false || DiffieHellman.isPrime(this.g) === false) {
            throw new Error('Error message');
        }

        if (!(this.p > 1 && this.p < 9999)) {
            throw new Error('Error message');
        }

        if (!(this.g > 1 && this.g < 9999)) {
            throw new Error('Error message');
        }
    }

    static isPrime(number) {
        if (number <= 1) {
            return false;
        } else if (number === 2 || number === 3 || number === 5) {
            return true;
        } else if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
            return false;
        }

        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    }

}

module.exports={
    DiffieHellman
}

