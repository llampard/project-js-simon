// This file contains the game logic.
// All the event-listening should happen in buttons.js

let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let on = false;
let win;


const turnCounter = document.querySelector("turn")
const GreenButton = document.querySelector("simon-button green");
const RedButton = document.querySelector("simon-button red");
const YellowButton = document.querySelector("simon-button yellow");
const BlueButton = document.querySelector("simon-button blue");
const playButton = document.querySelector("#play");
const resetButton = document.querySelector("#reset");

function initialize (){
  HTMLButtonElement.onclick = "play"
  HTMLButtonElement.onclick = "reset"
}



function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  GreenButton.getElementsByClassName(".simon-button.green");

}

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  RedButton.getElementsByClassName(".simon-button.red");
}

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  YellowButton.getElementsByClassName(".simon-button.yellow");
}

function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  BlueButton.getElementsByClassName(".simon-button.blue");
}

function clearColor() {
 GreenButton.getElementsByClassName(".simon-button.green");
 RedButton.getElementsByClassName(".simon-button.red");
 YellowButton.getElementsByClassName(".simon-button.yellow");
 BlueButton.getElementsByClassName(".simon-button.blue");
}

function flashColor() {
  GreenButton.getElementsByClassName(".simon-button.green");
 RedButton.getElementsByClassName(".simon-button.red");
 YellowButton.getElementsByClassName(".simon-button.yellow");
 BlueButton.getElementsByClassName(".simon-button.blue");
}



function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}
