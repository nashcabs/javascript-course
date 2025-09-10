'use strict';

//DOM element selections

const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);

messageEl.textContent = 'BASTA KALBO, PANOT';
const scoreEl = document.querySelector('.score');
console.log('Score Mo:', scoreEl.textContent);
scoreEl.textContent = 50;

const numberEl = document.querySelector('.number');
//numberEl.textContent = 13;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
// guessEl.value = 9;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state Initialized!');

//Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
  //once check button is clicked do this
  console.log('Check Button Clicked!');
  // Get the user input value
  const guess = Number(document.querySelector('.guess').value);
  console.log('User Guess:', guess);

  if (!guess) {
    console.log('No Number!');
    document.querySelector('.message').textContent = 'No Number!';
    return;
  }

  if (guess < 1 || guess > 20) {
    console.log('Invalid Number!');
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return;
  }
  //function of the game
  if (guess === secretNumber) {
    console.log('User Guessed Correctly!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'You Win!';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  } else if (guess > secretNumber) {
    console.log('Too High!');
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You Lost the Game, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.message').textContent = 'Game Over!';
    }
  } else if (guess < secretNumber) {
    console.log('Too Low!');
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You Lost the Game, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.message').textContent = 'Game Over!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //restart message display
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('body').style.backgroundColor = '';

  console.log('Game Reset! New Secret Number:', secretNumber);
});
