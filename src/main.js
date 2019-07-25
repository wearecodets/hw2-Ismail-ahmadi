// const amount = document.querySelector('.form__total span');
// const subButton = document.querySelector('button[type="submit"]');
// const buttonAmount = document.querySelector('button span');
// const inputs = Array.from(document.querySelectorAll('input[type="radio"]'));
// const annual = document.querySelector('input[value="Annually"]');
// const monthly = document.querySelector('input[value="Monthly"]');
const accordions = document.querySelectorAll('.accordion');
const activeClass = 'accordion--active';

const monthlyCost = 30;
const annualCost = 25;
let amount = 0;

const form = document.querySelector('.form');
const total = document.querySelector('.form__total');
const paypalLink = document.querySelector('a.form__cc-heading');

// console.log(buttonAmount.textContent);
// console.log(subButton.disabled);
// console.log(amount);
// <--------------- Paymeent Plan --------------->
function calculateTotal() {
  const frequency = form.plan.value;
  amount = frequency === 'Monthly' ? monthlyCost : annualCost * 12;
}

function updateTotal() {
  form.submit.disabled = false;
  total.textContent = `$${amount}`;
  form.submit.textContent = `Pay $${amount} Now`;
  paypalLink.setAttribute('href', `https://paypal.me/nikosolihin/${amount}`);
}

form.plan.forEach(function(plan) {
  plan.addEventListener('change', function() {
    calculateTotal();
    updateTotal();
  });
});
// function changeCost() {
//   if (annual.checked === true) {
//     amount.textContent = '300';
//   } else {
//     amount.textContent = '30';
//   }
//   if (amount.textContent !== '0') {
//     subButton.disabled = false;
//     buttonAmount.textContent = amount.textContent;
//   }
// }
// inputs.forEach(input => input.addEventListener('click', changeCost));

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
// const amount = document.querySelector('.form__total span');
// console.log(amount);

// const accs = Array.from(document.querySelectorAll('.accordion'));
// // console.log(accs);
// function newFunction() {
//   this.classList.toggle('accordion--active');
//   //   this.classList.remove('accordion--active');
// }
// accs.forEach(acc => acc.addEventListener('click', newFunction));
// console.log('Hello, world!');
// const amount = document.querySelector('.form__total span');
// console.log(amount);
// <----------- accodion code here below --------->
accordions.forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.classList.contains(activeClass)) {
      // I'm currently active, so just close myself.
      item.classList.remove(activeClass);
    } else {
      // I'm not active, so close the other first.
      accordions.forEach(function(others) {
        others.classList.remove(activeClass);
      });
      // Then activate myself.
      item.classList.add(activeClass);
    }
  });
});
// < ----------- Paypal Link fix ------------ >
// const paypalLink = document.querySelector('.form__right a img');
// console.log(paypalLink);
// // console.log(paypalLink.removeAttribute('href'));
// // paypalLink.href = 'www.goolge.com';
// function paypalweb() {
//   paypalLink.removeAttribute('href');
//   paypalLink.setAttribute('href', `https://paypal.me/nikosolihin/${amount}`);
// }
// paypalLink.addEventListener('click', paypalweb);
