var relationshipTypes = require('./relationshipTypes.js');
var _ = require('lodash');

function add(relationships, from, to, type) {
    if (relationships[from] == undefined) {
        relationships[from] = {};
    }

    relationships[from][to] = type;
}

function checkMatch(input, regex, handleMatch) {
    var matches = regex.exec(input);

    if (matches) {
        handleMatch(matches);
    }
}

var parser =  {

    parse: function(raw) {
        var relationships = {};

        _.forEach(_.split(raw, '\n'), function(line) {
            checkMatch(line, /(.*?) and (.*?) are friends/g, function(matches) {
                add(relationships, matches[1], matches[2], relationshipTypes.FRIENDS);
                add(relationships, matches[2], matches[1], relationshipTypes.FRIENDS);
            });

            checkMatch(line, /(.*?) and (.*?) are acquaintances/g, function(matches) {
                add(relationships, matches[1], matches[2], relationshipTypes.ACQUAINTANCES);
                add(relationships, matches[2], matches[1], relationshipTypes.ACQUAINTANCES);
            });

            checkMatch(line, /(.*?) and (.*?) are in a relationship/g, function(matches) {
                add(relationships, matches[1], matches[2], relationshipTypes.IN_A_RELATIONSHIP);
                add(relationships, matches[2], matches[1], relationshipTypes.IN_A_RELATIONSHIP);
            });

            checkMatch(line, /(.*?) has a crush on (.*?)$/g, function(matches) {
                add(relationships, matches[1], matches[2], relationshipTypes.CRUSH);                
            });
        });

        return relationships;
    }

};

module.exports = parser;
