var parser = require('../src/parser.js');
var expect = require('chai').expect;

describe("parser", function () {

    it('should parse a friend relationship', function() {
        var raw = 'Ann and Bob are friends';

        var relationships = parser.parse(raw);

        expect(relationships.Ann.Bob).to.equal(2);

    });

});