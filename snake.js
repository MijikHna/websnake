import { getInputDirection } from "./input.js";

let snakeBody = null;

export function initSnake(gameBoardElem){
  snakeBody = [{x: 11, y: 11}];

  const snakeElem = document.createElement('div');
  snakeElem.classList.add('snake');

  snakeElem.style.gridRowStart = snakeBody[0].x;
  snakeElem.style.gridColumnStart = snakeBody[0].y;

  gameBoardElem.appendChild(snakeElem);
}

export function updateSnake(){
  const {x, y} = getInputDirection();
  
  for (let i = snakeBody.length-1; i > 0; i--){
    snakeBody[i] = {...snakeBody[i - 1]}
  }

  snakeBody[0].x += x;
  snakeBody[0].y += y;
}

export function addToBody(){
  const {x, y} = getInputDirection();

  // snakeBody.push({x: snakeBody[snakeBody.length-1].x + x, y: snakeBody[snakeBody.length-1].y + y});
  snakeBody.push({...snakeBody[snakeBody.length-1]})
}

export function drawSnake(gameBoardElem){
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')

    snakeElement.classList.add('snake');

    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x

    gameBoardElem.appendChild(snakeElement)
  })
}

export function checkIntersect() {
  const snakeBodyWithoutHead = [...snakeBody];
  const snakeHead = snakeBodyWithoutHead.shift();

  return snakeBodyWithoutHead.some(snakePart => {
    return snakePart.x === snakeHead.x && snakePart.y === snakeHead.y;
  });
}

export function getSnakeHeadPostion() {
  return {
    x: snakeBody[0].x,
    y: snakeBody[0].y
  };
}
