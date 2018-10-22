const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNum = event.detail;
    const result = this.primeCheck(inputtedNum);
    PubSub.publish('PrimeChecker:check-result', result);
  });
};

PrimeChecker.prototype.primeCheck = function (number) {
  if (number <= 1) {
    return false;
  };
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    };
  };
  return true;
};

module.exports = PrimeChecker;
