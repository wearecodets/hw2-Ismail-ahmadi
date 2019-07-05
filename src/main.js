// console.log('Hello, world!');
const accs = Array.from(document.querySelectorAll('.accordion'));
// console.log(accs);
function newFunction() {
  this.classList.toggle('accordion--active');
  //   this.classList.remove('accordion--active');
}
accs.forEach(acc => acc.addEventListener('click', newFunction));
console.log('Hello, world!');
const amount = document.querySelector('.form__total span');
// console.log(amount);
const paypalLink = document.querySelector('a');
// console.log(paypalLink.removeAttribute('href'));
// paypalLink.href = 'www.goolge.com';
function paypalweb() {
  paypalLink.removeAttribute('href');
  paypalLink.setAttribute(
    'href',
    `https://paypal.me/nikosolihin/${amount.textContent}`
  );
}
paypalLink.addEventListener('click', paypalweb);