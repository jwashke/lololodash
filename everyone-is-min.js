var _ = require("lodash");

var worker = function(towns) {
  var result = {
    warm: [],
    hot: []
  };

  function checkTemps(temp) {
    return temp > 19;
  }

  _.forEach(towns, function(temperatureArray, townName) {
    if (_.every(temperatureArray, checkTemps)) {
      result.hot.push(townName);
    } else if (_.some(temperatureArray, checkTemps)) {
      result.warm.push(townName);
    }
  });
  return result;
};

module.exports = worker;
