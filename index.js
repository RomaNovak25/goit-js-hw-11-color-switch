const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

//   Напиши скрипт, который после нажатия кнопки Start, раз в секунду
//  меняет цвет фона body на случайное значение из массива используя инлайн-стиль.
//  При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
//  Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй
// функцию randomIntegerFromInterval.
refs = {
  start: document.querySelector('.start'),
  stop: document.querySelector('.stop'),
  background: document.querySelector('.body'),
};

refs.start.addEventListener('click', startTimer);
refs.stop.addEventListener('click', stopTimer);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const maxN = colors.length - 1;

let watchId = null;
let currentTime = null;

function startTimer() {
  watchId = setInterval(() => {
    refs.background.style.backgroundColor = colors[randomIntegerFromInterval(0, maxN)];
  }, 1000);
  refs.start.disabled = true;
}

function stopTimer() {
  refs.start.disabled = false;
  clearInterval(watchId);
  clearInterval(currentTime);
}


// const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

// refs = {
//   start: document.querySelector('.start'),
//   stop: document.querySelector('.stop'),
//   background: document.querySelector('.body'),
// };

// refs.start.addEventListener('click', startBackgroundTimer);
// refs.stop.addEventListener('click', stopBackgroundTimer);

// function startBackgroundTimer() {
//   setInterval(() => {
//     console.log('qweqwe');
//   }, 1000);
// }

// // startBackgroundTimer();

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function stopBackgroundTimer() {
//   console.log('mango');
// }

// stopBackgroundTimer();

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
