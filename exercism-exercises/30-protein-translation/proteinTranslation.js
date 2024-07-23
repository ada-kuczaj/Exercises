function splitIntoTrio(RNA) {
    let trio = [];
    for (let i = 0; i < RNA.length; i += 3) {
        trio.push(RNA.slice(i, i + 3));
    }
    return trio;
}

function translate(RNA) {


    const codonsAndProteins = {
        'AUG': 'Methionine',
        'UUU': 'Phenylalanine',
        'UUC': 'Phenylalanine',
        'UUA': 'Leucine',
        'UUG': 'Leucine',
        'UCU': 'Serine',
        'UCC': 'Serine',
        'UCA': 'Serine',
        'UCG': 'Serine',
        'UAU': 'Tyrosine',
        'UAC': 'Tyrosine',
        'UGU': 'Cysteine',
        'UGC': 'Cysteine',
        'UGG': 'Tryptophan',
        'UAA': 'STOP',
        'UAG': 'STOP',
        'UGA': 'STOP'
    };

    if (!RNA) {
        return [];
    }

    const codons = splitIntoTrio(RNA);
    let proteins = [];

    for (let codon of codons) {

        //The value for a specific key can be read using the object[key] notation
        const protein = codonsAndProteins[codon]; //returns the value assigned to the codon key in the codonsAndProteins object
        if (protein === 'STOP') {
            break;
        }
        if (!protein) {
            throw new Error("Invalid codon");
        }
        proteins.push(protein);
    }

    return proteins;
}

module.exports = {
    translate,
}
