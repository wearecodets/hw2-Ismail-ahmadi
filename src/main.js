// console.log('Hello, world!');
const accs = Array.from(document.querySelectorAll('.accordion'));
// console.log(accs);
function newFunction() {
  this.classList.toggle('accordion--active');
  //   this.classList.remove('accordion--active');
}
accs.forEach(acc => acc.addEventListener('click', newFunction));
