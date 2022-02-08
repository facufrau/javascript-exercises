const ftoc = function(tempFahrenheit) {
  return Number(((tempFahrenheit - 32) * 5 / 9).toFixed(1));
};

const ctof = function(tempCelsius) {
  return Number(((tempCelsius * 9 / 5)+ 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
