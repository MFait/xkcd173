var relationshipTypes = require('./relationshipTypes.js');

function add(relationships, from, to, type) {
    if (relationships[from] == undefined) {
        relationships[from] = {};
    }

    relationships[from][to] = type;
}

var parser =  {

    parse: function(raw) {
        var relationships = {};

        var regex = /(.*?) and (.*?) are friends/g;
        var matches = regex.exec(raw);

        if (matches) {
            add(relationships, matches[1], matches[2], relationshipTypes.FRIENDS);
            add(relationships, matches[2], matches[1], relationshipTypes.FRIENDS);
        }

        regex = /(.*?) and (.*?) are acquaintances/g;
        matches = regex.exec(raw);

        if (matches) {
            add(relationships, matches[1], matches[2], relationshipTypes.ACQUAINTANCES);
            add(relationships, matches[2], matches[1], relationshipTypes.ACQUAINTANCES);
        }

        regex = /(.*?) and (.*?) are in a relationship/g;
        matches = regex.exec(raw);

        if (matches) {
            add(relationships, matches[1], matches[2], relationshipTypes.IN_A_RELATIONSHIP);
            add(relationships, matches[2], matches[1], relationshipTypes.IN_A_RELATIONSHIP);
        }

        return relationships;
    }

};

module.exports = parser;