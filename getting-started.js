var _ = require("lodash");

var worker = function(array) {
  return _.filter(array, { active: true })
};

module.exports = worker;
