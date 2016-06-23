var _ = require("lodash");

var worker = function(words) {
  var newWords = _.chain(words).sortBy().map(function(word) {
    return word.toUpperCase() + 'CHAINED';
  });
  return newWords;
};

module.exports = worker;
