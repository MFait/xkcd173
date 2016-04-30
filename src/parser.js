var parser =  {

    parse: function(raw) {
        var relationships = {};

        var regex = /(.*?) and (.*?) are friends/g;
        var matches = regex.exec(raw);

        if (matches) {
            relationships[matches[1]] = {};
            relationships[matches[2]] = {};

            relationships[matches[1]][matches[2]] = 2;
            relationships[matches[2]][matches[1]] = 2;
        }

        return relationships;
    }

};

module.exports = parser;