function compute(DNA, replicatedDNA) {

    if (DNA.length !== replicatedDNA.length) {
        throw new Error('strands must be of equal length');
    }

    let hammingDistance = 0;

    for (let i = 0; i < DNA.length; i++) {
        if (DNA[i] !== replicatedDNA[i]) {
            hammingDistance += 1;
        }
    }
    return hammingDistance;
}

module.exports = {
    compute
}