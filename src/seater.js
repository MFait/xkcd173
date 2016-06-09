var _ = require('lodash');

function permute(arr)
{
    if (_.isEmpty(arr)) {
        return [[]];
    }

    var result = [];

    for (var i=0; i<arr.length; i++)
    {
        var copy = Object.create(arr);
        var head = copy.splice(i, 1);

        var rest = permute(copy);

        for (var j=0; j<rest.length; j++)
        {
            var next = head.concat(rest[j]);
            result.push(next);
        }
    }

    return result;
}

function scoreFor(personA, personB, relationships) {
    if((relationships[personA] === undefined) ||
      (relationships[personA][personB] === undefined)) {
      return 0
    }

    return relationships[personA][personB];
}

var seater = {

    allSequences: function(relationships) {
        var all = Object.keys(relationships);
        return permute(all);
    },

    evaluate: function(sequence, relationships) {
        return _.sum(_.map(sequence, function(person, index) {
            var score = 0;

            if (person != _.last(sequence)) {
                score += scoreFor(person, sequence[index + 1], relationships);
            }

            if (person != _.first(sequence)) {
                score += scoreFor(person, sequence[index - 1], relationships);
            }

            return score;
        }));
    }

};

module.exports = seater;
