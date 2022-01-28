import { initInputDirection, setKeyEventListener, unsetKeyEventListener } from './input.js'

import {addToBody, checkIntersect, drawSnake, getSnakeHeadPostion, initSnake, updateSnake} from './snake.js';
import {drawFood, getFoodPostion, initFood } from './food.js';

const SNAKE_SPEED = 2;
const GRID_SIZE = 21;

const gameBoardElem = document.getElementById('game-board')

let lastRenderTime = 0;
let gameOver = false;

function main() {
  // add Event Listener for Enter key
  window.addEventListener('keydown', startGame);
  
  // show Title
  const titleElem = document.createElement('div');
  titleElem.id = 'title';
  titleElem.innerHTML = 'Press Enter to Start the Game'

  gameBoardElem.appendChild(titleElem);
}

function startGame(e){
  if (e.key === 'Enter') {
    // remove Enter Key listener
    document.getElementById('title').remove();
    
    // add Arrow Key listeners
    window.removeEventListener('keydown', startGame)
    setKeyEventListener()
    
    initInputDirection();
    initSnake(gameBoardElem);
    initFood(gameBoardElem);
    
    // start Game
    window.requestAnimationFrame(playGame);
  }
}

function playGame(currentTime) {
  // if (gameOver) {
  //   stopGame();
  // } 
 
  if (checkBorderIntersect() || checkIntersect()) {
    stopGame();
    return;
  } 

  window.requestAnimationFrame(playGame);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  
  // dont update() and so on if not enough seconds since last render
  if (secondsSinceLastRender < (1 / SNAKE_SPEED)) {
    return 
  }
  
  lastRenderTime = currentTime;

  update();
  draw();
}

function stopGame() {
  gameBoardElem.innerHTML = '';
  unsetKeyEventListener()
  
  main();
}


function update() {
  if (checkSnakeOnFood()) {
    initFood(); 
    addToBody();
  }

  updateSnake();
}

function draw() {
  gameBoardElem.innerHTML = '';
  drawFood(gameBoardElem)
  drawSnake(gameBoardElem);
}

function checkBorderIntersect() {
  const snakeHead = getSnakeHeadPostion();

  return (
    snakeHead.x < 1 || snakeHead.x > GRID_SIZE || snakeHead.y < 1 || snakeHead.y > GRID_SIZE
  )
}

function checkSnakeOnFood(){
  const snakeHead = getSnakeHeadPostion();
  const food = getFoodPostion();

  return snakeHead.x === food.x && snakeHead.y === food.y
}

main()
