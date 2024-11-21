// const pathImage = 'img/white_lamp.png';

// const offBulb = document.querySelector('.bulb img')
// console.log(offBulb.src);
// offBulb.src = pathImage;

// preparazione
const button = document.getElementById('switch')
console.log(button.innerHTML);

const bulbYellow = document.getElementById('bulbOn');
console.log(bulbYellow.querySelector('img'));

const bulbWhite = document.getElementById('bulbOff');
console.log(bulbWhite.querySelector('img'));



// elaborazione

button.addEventListener('click', () => {
  bulbYellow.classList.toggle('d-block');
  bulbWhite.classList.toggle('d-none');
  button.innerHTML = bulbYellow.classList.contains('d-block') ? 'Spegni' : 'Accendi';
})





