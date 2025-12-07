const inputBtn = document.getElementById('input');
const increaseBtn = document.getElementById('increase');
const ResetBtn = document.getElementById('reset');
const DecreaseBtn = document.getElementById('decrease');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  inputBtn.textContent = count;
});

ResetBtn.addEventListener('click', () => {
  count = 0;
  inputBtn.textContent = count;
});

DecreaseBtn.addEventListener('click', () => {
  count--;
  inputBtn.textContent = count;
});
