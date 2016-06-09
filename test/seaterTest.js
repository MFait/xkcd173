var seater = require('../src/seater.js');
var expect = require('chai').expect;

describe('seater', function() {

    it('should consider all sequences', function() {
        var relationships = {
            Ina: { Jan: 5, Klaus: 2 },
            Jan: { Ina: 5, Klaus: 2 },
            Klaus: { Jan: 2, Ina: 3 }
        };

        var sequences = seater.allSequences(relationships);

        expect(sequences.length).to.equal(6);
    });

    it('should evaluate a sequence', function() {
        var relationships = {
            Ina: { Jan: 5, Klaus: 2 },
            Jan: { Ina: 5, Klaus: 2 },
            Klaus: { Jan: 2, Ina: 3 }
        };
        var sequence = ['Klaus', 'Jan', 'Ina'];

        var score = seater.evaluate(sequence, relationships);

        expect(score).to.equal(14);
    });

    it('should assume a value of zero if no relationship is given', function() {
        var relationships = {};
        var sequence = ['Klaus', 'Jan', 'Ina'];

        var score = seater.evaluate(sequence, relationships);

        expect(score).to.equal(0);
    });

    it('should find best sequence', function() {
        var relationships = {
            Ina: { Jan: 5, Klaus: 2 },
            Jan: { Ina: 5, Klaus: 2 },
            Klaus: { Jan: 2, Ina: 3 }
        };
        var sequences = [
          ['Klaus', 'Jan', 'Ina'],
          ['Klaus', 'Ina', 'Jan'],
          ['Jan', 'Klaus', 'Ina']
        ];

        var bestSequence = seater.findBest(sequences, relationships);

        expect(bestSequence).to.eql(['Klaus', 'Ina', 'Jan']);
    })

});
