const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  startBtn: document.querySelector('.start'),
  stopBtn: document.querySelector('.stop'),
  backgroundColor: document.querySelector('.body'),
};

refs.startBtn.addEventListener('click', startBackgrountChanges);
refs.stopBtn.addEventListener('click', stopBackgrountChanges);

let interval = null;
refs.startBtn.disabled = false;


function startBackgrountChanges() {
  interval = setInterval(() => {
    refs.backgroundColor.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
}

function stopBackgrountChanges() {
  clearInterval(interval);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/*Переключатель цветов
Есть массив цветов в hex-формате и кнопки Start и Stop.

<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; */
