function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getBackgraundColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let colorId = null;

refs.startBtn.addEventListener('click', () => {
  colorId = setInterval(getBackgraundColor, 1000);
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(colorId);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
});
