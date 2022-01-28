let lastInputDirection = {x: 0, y: 0}
let inputDirection = {x: 0, y: 0}

function handleArrowKeyInput(e) {
    switch (e.key) {
      case 'ArrowUp':
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: -1 }
        break
      case 'ArrowDown':
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: 1 }
        break
      case 'ArrowLeft':
        if (lastInputDirection.x !== 0) break
        inputDirection = { x: -1, y: 0 }
        break
      case 'ArrowRight':
        if (lastInputDirection.x !== 0) break
        inputDirection = { x: 1, y: 0 }
        break
    }
}

export function setKeyEventListener() {
  window.addEventListener('keydown', handleArrowKeyInput);
}

export function unsetKeyEventListener() {
  document.removeEventListener('keydown', handleArrowKeyInput);
}

export function getInputDirection(){
  lastInputDirection = inputDirection;
  return inputDirection;
}

export function initInputDirection() {
  lastInputDirection = {x: 0, y: 0};
  inputDirection = {x: 0, y: 0};
}
