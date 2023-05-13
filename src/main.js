const increaseButton = document.querySelector('.plus');
const decreaseButton = document.querySelector('.minus');
const number = document.querySelector('#number');

let initialNumber = 0;

increaseButton.addEventListener('click', () => {
  initialNumber++;
  number.innerHTML = initialNumber;
});

decreaseButton.addEventListener('click', () => {
  initialNumber--;
  number.innerHTML = initialNumber;
});