var _ = require("lodash");

var worker = function(array) {
  var results = [];
  var comments = _.groupBy(array, 'username');

  _.forEach(comments, function(comment, name) {
     results.push({
       username: name,
       comment_count: _.size(comment)
     });
  });

  return _.sortBy(results, function(result) {
    return -result['comment_count'];
  });
};

module.exports = worker;
