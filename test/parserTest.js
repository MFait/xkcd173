var parser = require('../src/parser.js');
var expect = require('chai').expect;

describe("parser", function () {

    it('should parse a friend relationship', function() {
        raw = 'Ann and Bob are friends';

        relationships = parser.parse(raw);

        expect(relationships.count).to.equal(2);
        expect(relationships["Ann"]["Bob"]).to.be.defined();
        expect(relationships["Bob"]["Ann"]).to.be.defined();
    });

});