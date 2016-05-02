var relationshipTypes = require('./relationshipTypes.js');

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

        checkMatch(raw, /(.*?) and (.*?) are friends/g, function(matches) {
            add(relationships, matches[1], matches[2], relationshipTypes.FRIENDS);
            add(relationships, matches[2], matches[1], relationshipTypes.FRIENDS);
        });

        checkMatch(raw, /(.*?) and (.*?) are acquaintances/g, function(matches) {
            add(relationships, matches[1], matches[2], relationshipTypes.ACQUAINTANCES);
            add(relationships, matches[2], matches[1], relationshipTypes.ACQUAINTANCES);
        });

        checkMatch(raw, /(.*?) and (.*?) are in a relationship/g, function(matches) {
            add(relationships, matches[1], matches[2], relationshipTypes.IN_A_RELATIONSHIP);
            add(relationships, matches[2], matches[1], relationshipTypes.IN_A_RELATIONSHIP);
        });

        return relationships;
    }

};

module.exports = parser;