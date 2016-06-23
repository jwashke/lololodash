var _ = require("lodash");

var worker = function(orders) {
  var result = [];
  orders = _.groupBy(orders, 'article');

  _.forEach(orders, function(order, key) {
    key = parseInt(key);
    var total = _.reduce(order, function(sum, order) {
      return sum + order.quantity;
    }, 0);

    result.push({
      article: key,
      total_orders: total
    });
  });

  return _.sortBy(result, function(result) {
    return -result['total_orders'];
  });
}

module.exports = worker;
