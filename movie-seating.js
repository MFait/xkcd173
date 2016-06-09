var parser = require('./src/parser.js');
var seater = require('./src/seater.js');

var raw =
    'Alice and Bob are in a relationship\n' +
    'Christine and David are in a relationship\n' +
    'Alice and Christine are friends\n' +
    'Alice and David are acquaintances\n' +
    'Christine and Bob are acquaintances\n' +
    'Ed and Gil are in a relationship\n' +
    'Ed and Bob are friends\n' +
    'David has a crush on Gil\n' +
    'Alice and Ed are acquaintances\n';

var relationships = parser.parse(raw);
var sequences = seater.allSequences(relationships);
var best = seater.findBest(sequences, relationships);

console.log(best);
