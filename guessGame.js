'use strict';

const randomNumbs = function (range) {
  let n = Math.trunc(Math.random() * range) + 1;
  return n;
};

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const assignValue2Element = function (element, value) {
  document.querySelector(element).textContent = value;
};

const assignStyle = function (element, property, value) {
  document.querySelector(element).style[property] = value;
};

let secretNumber = randomNumbs(20);
let score = 20;
let highscore = 0;
let gameover = false;
// Activate the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!gameover) {
    if (!guess) {
      displayMsg('⛔ No Number!');
    } else if (guess === secretNumber) {
      displayMsg('🎉 Correct Number!');
      assignValue2Element('.number', secretNumber);
      assignValue2Element('.score', score);
      assignStyle('body', 'backgroundColor', '#60b347');
      assignStyle('.number', 'width', '30rem');
      gameover = true;
      if (score > highscore) {
        highscore = score;
        assignValue2Element('.highscore', highscore);
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMsg(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        assignValue2Element('.score', score);
      } else {
        assignValue2Element('.score', 0);
        displayMsg('💥 You lost the game!');
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumbs(20);
  score = 20;
  displayMsg('Start guessing...');
  assignValue2Element('.number', '?');
  assignValue2Element('.guess', '');
  assignValue2Element('.score', 20);
  assignStyle('body', 'backgroundColor', '#222');
  assignStyle('.number', 'width', '15rem');
});
