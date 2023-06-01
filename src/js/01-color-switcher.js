function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

var intervalId;

function startColorChange() {
  var startButton = document.querySelector('[data-start]');
  var stopButton = document.querySelector('[data-stop]');
  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  var startButton = document.querySelector('[data-start]');
  var stopButton = document.querySelector('[data-stop]');
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
}

document
  .querySelector('[data-start]')
  .addEventListener('click', startColorChange);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopColorChange);
