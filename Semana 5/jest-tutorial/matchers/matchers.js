const getName = (firstName, lastName) => `${firstName} ${lastName}`;
const multiply = (number1, number2) => number1 * number2;
const getCity = city => (city === "Sao Paulo" ? city : null);

module.exports = {
  getName,
  multiply,
  getCity
};
