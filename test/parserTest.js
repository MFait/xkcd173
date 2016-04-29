var parser = require('../src/parser.js');

describe("parser", function () {

    it('should parse a friend relationship', function() {
        raw = 'Ann and Bob are friends';

        relationships = parser.parse(raw);


    });

});