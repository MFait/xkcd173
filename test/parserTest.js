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

    it('should parse a one way cruch', function() {
        var raw = 'Gil has a crush on Hans';
        var relationships = parser.parse(raw);
        expect(relationships.Gil.Hans).to.equal(relationshipTypes.CRUSH);
        expect(relationships.Hans.Gil).to.equal(relationshipTypes.FRIENDS);
    });

    it('should parse mulitple relationships', function() {
        var raw =
            'Ina and Jan are in a relationship\n' +
            'Klaus and Jan are friends\n' +
            'Klaus has a crush on Ina\n';

        var relationships = parser.parse(raw);

        console.log(relationships);

        expect(relationships.Ina.Jan).to.equal(relationshipTypes.IN_A_RELATIONSHIP);
        expect(relationships.Jan.Ina).to.equal(relationshipTypes.IN_A_RELATIONSHIP);
        expect(relationships.Klaus.Jan).to.equal(relationshipTypes.FRIENDS);
        expect(relationships.Jan.Klaus).to.equal(relationshipTypes.FRIENDS);
        expect(relationships.Klaus.Ina).to.equal(relationshipTypes.CRUSH);
        expect(relationships.Ina.Klaus).to.equal(relationshipTypes.FRIENDS);
        // looks like Klaus and Jan will not be friends any more very soon ...
    });


});