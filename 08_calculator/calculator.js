const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  if (!numbers) {
    return 0;
  } else if (numbers.length === 1){
    return numbers[0];
  } else {
    return numbers.reduce((accumulator, item) => { return accumulator += item}, 0)
  }
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, item) => {return accumulator *= item}, 1);
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return factorial(number - 1) * number;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
