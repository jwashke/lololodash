var _ = require("lodash");

var worker = function(freelancers){
  var result;
  var total;
  var average;
  freelancers = _.sortBy(freelancers, 'income');

  total = _.reduce(freelancers, function(sum, freelancer){
    return sum + freelancer.income;
  }, 0);

  average = total / freelancers.length;

  var underperformers = _.filter(freelancers, function(freelancer){
    return freelancer.income <= average;
  });

  var overperformers = _.filter(freelancers, function(freelancer) {
    return freelancer.income > average;
  });
  result = {
    average: average,
    underperform: underperformers,
    overperform: overperformers
  };

  return result;
};

module.exports = worker;
