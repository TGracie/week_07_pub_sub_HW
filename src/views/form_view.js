const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function (){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form Submit Event", event);
    const inputtedNum = event.target.number.value;
    PubSub.publish('FormView:number-submitted', inputtedNum);
  });
};

module.exports = FormView;
