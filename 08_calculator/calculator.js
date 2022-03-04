const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 > num2 ? num1 - num2: num2 - num1;
};

const sum = function(array) {
  let total = 0;
  array.forEach(element => {
    total += element;
  })
	return total;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(element => {
  product *= element;
  });
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  return num <= 1? 1: num * factorial(num-1);
	
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
