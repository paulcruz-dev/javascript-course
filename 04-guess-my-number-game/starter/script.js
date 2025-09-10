'use strict';
 
// DOM Element Selection
console.log('=== DOM ELEMENT SELECTION ===');
 
const messageEl = document.querySelector('.message');
//messageEl.textContent = 'Hello from Javascript';
 
const scoreEl = document.querySelector('.score');
//scoreEl.textContent = '15';
 
const numberEl = document.querySelector('.number');
// numberEl.textContent = '10';
 
const highScoreEl = document.querySelector('.highscore');
// highScoreEl.textContent = '10';
 
const guessInput = document.querySelector('.guess');
// guessInput.value = '5';
 
// GAME STATE VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Ýour secret number is:', secretNumber);
let score = 20;
let highscore = 0;
 
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
 
/////////////////////////////
 
// BASIC GAME LOGIC
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);
 
  if (guess === secretNumber) {
    console.log('Lowpet mo naman yah');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.querySelector('.message').textContent = 'TALAGANG SOBRANG BANGIS';
 
  }  else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'TAAS NAMAN YAH, ULIT';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = 'OLATS YAH';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'BABA NAMAN YAH, ULIT';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = 'OLATS YAH, UWI KANA NGA';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
  }
});
 
document.querySelector('.again').addEventListener('click', function () {
  // block
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  // restart secret number display
  document.querySelector('.number').textContent = '?';
  // restart the score
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // enable guess and check
  document.querySelector('.guess').disabled + true;
  document.querySelector('.check').disabled + true;
});