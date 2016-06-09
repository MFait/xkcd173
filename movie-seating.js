var parser = require('./src/parser.js');
var seater = require('./src/seater.js');

var raw =
    'Anna and Michael are in a relationship\n' +
    'Lena and Martin are in a relationship\n' +
    'Anna and Lena are friends\n' +
    'Anna and Martin are acquaintances\n' +
    'Lena and Michael are acquaintances\n' +
    'Folker and Sabrina are in a relationship\n' +
    'Folker and Michael are friends\n' +
    'Martin has a crush on Sabrina\n' +
    'Anna and Folker are acquaintances\n';

var relationships = parser.parse(raw);
var sequences = seater.allSequences(relationships);
var best = seater.findBest(sequences, relationships);

console.log(best);
