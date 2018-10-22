const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:check-result', (event) =>{
    const numberStatus = event.detail;
    this.displayResult(numberStatus);
  });
};

ResultView.prototype.displayResult = function (numCheckResult) {
  const resultElement = document.querySelector('#result');
  console.log('Display Result input:', numCheckResult);
  let text = resultElement.textContent();
  if(numCheckResult === true){
    text = "Yes! That's a prime number!";
    else {
      text = "Unlucky! That's not a prime number, try again!";
    };
  };
};

module.exports = ResultView;
