const amount = document.querySelector('.form__total');
const subButton = document.querySelector('button[type="submit"]');

const buttonAmount = document.querySelector('button span');
// console.log(buttonAmount.textContent);
// console.log(subButton.disabled);
// console.log(amount);
if (amount.textContent != '$0') {
  subButton.disabled = false;
  buttonAmount.textContent = amount.textContent;
}
