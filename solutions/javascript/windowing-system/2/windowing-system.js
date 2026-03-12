// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    let width = newSize.width < 1 ? 1 : newSize.width;
    let height = newSize.height < 1 ? 1 : newSize.height;

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    width = width > maxWidth ? maxWidth : width;
    height = height > maxHeight ? maxHeight : height;

    this.size.resize(width, height);
  }

  move(newPosition) {
    let x = newPosition.x < 0 ? 0 : newPosition.x;
    let y = newPosition.y < 0 ? 0 : newPosition.y;

    const maxPositionX = this.screenSize.width -  this.size.width;
    const maxPositionY = this.screenSize.height -  this.size.height;

    x = x > maxPositionX ? maxPositionX : x;
    y = y > maxPositionY ? maxPositionY : y;
    
    this.position.move(x, y)
  }
}

function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}

export { Size, Position, ProgramWindow, changeWindow }
