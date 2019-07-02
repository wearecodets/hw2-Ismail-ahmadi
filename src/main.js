// console.log('Hello, world!');
// const total = document.querySelector('.form__total');
// console.log(total);
// // total.textContent = '';
// const radio = document.querySelectorAll('input[type="radio"]');
// console.log(radio);
// // console.log(radio.checked === true);
// function radioPayment() {
//   if (radio.checked === true) {
//     radio.textContent = '$300';
//     return true;
//   }
// }
// radio.forEach(radio => radio.addEventListener('change', radioPayment));
// // radio.forEa.addEventListener('click', radioPayment());
const amount = document.querySelector('.form__total');

const inputs = Array.from(document.querySelectorAll('input[type="radio"]'));

const annual = document.querySelector('input[value="Annually"]');
const monthly = document.querySelector('input[value="Monthly"]');

function changeCost() {
  if (annual.checked === true) {
    amount.textContent = '$300';
  } else {
    amount.textContent = '$30';
  }
}
inputs.forEach(input => input.addEventListener('click', changeCost));
