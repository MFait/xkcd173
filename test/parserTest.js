var parser = require('../src/parser.js');
var relationshipTypes = require('../src/relationshipTypes.js');
var expect = require('chai').expect;

describe("parser", function () {

    it('should parse a friend relationship', function() {
        var raw = 'Ann and Bob are friends';
        var relationships = parser.parse(raw);
        expect(relationships.Ann.Bob).to.equal(relationshipTypes.FRIENDS);
        expect(relationships.Bob.Ann).to.equal(relationshipTypes.FRIENDS);
    });
    
    it('should parse a acquaintances relationship', function() {
        var raw = 'Charlie and Danny are acquaintances';
        var relationships = parser.parse(raw);
        expect(relationships.Charlie.Danny).to.equal(relationshipTypes.ACQUAINTANCES);
        expect(relationships.Danny.Charlie).to.equal(relationshipTypes.ACQUAINTANCES);
    });

    it('should parse a real relationship', function() {
        var raw = 'Emma and Frank are in a relationship';
        var relationships = parser.parse(raw);
        expect(relationships.Emma.Frank).to.equal(relationshipTypes.IN_A_RELATIONSHIP);
        expect(relationships.Frank.Emma).to.equal(relationshipTypes.IN_A_RELATIONSHIP);
    });
    

});