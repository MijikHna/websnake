let food = {}; 

export function initFood(gameBoardElem){
  food = calcPosition();
  //drawFood(gameBoardElem);
}

export function drawFood(gameBoardElem){
  const foodElem = document.createElement('div');
  foodElem.id = 'food';

  foodElem.style.gridRowStart = food.y;
  foodElem.style.gridColumnStart = food.x;

  gameBoardElem.appendChild(foodElem);
}

function calcPosition(){
  const GRID_SIZE = 21;

  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  }  
}

export function getFoodPostion(){
  return {
    x: food.x,
    y: food.y
  }
}
