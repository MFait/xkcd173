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

        return relationships;
    }

};

module.exports = parser;