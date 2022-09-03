const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numArr) {
	return numArr.reduce((total, num) => {
    return total + num;
  },0 )
};

const multiply = function(numArr) {

	return numArr.reduce((total, num) => {
    return total * num;
  },1 )
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  let result = 1;
	for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
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
