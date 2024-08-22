// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 * 
 * @param {number} width
 * @param {number} height
 */

export function Size(width = 80, height = 60) {

  this.width = width;
  this.height = height;
    
}

/**
     *
     * @param {number} width
     * @param {number} height
     */
    Size.prototype.resize = function(width, height) {

      this.width = width
      this.height = height;
    };


/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {void}
 */
export function Position(x = 0, y = 0) {

  this.x = x;
  this.y = y;

}

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
  Position.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
  };

export class ProgramWindow {
    constructor() {
      this.size = new Size()
      this.position = new Position()
      this.screenSize = new Size(800, 600)
    }
  
// Remember to use class syntax for this task. That means you add the method definition directly in the class body.
// To find the correct values for the resizing, first think about the desired width you want to reach, taking the lower bound (1) into account.
// Then calculate the maximum width that is allowed considering the screen size and current x position of the window.
// With those two values, you can then decide what to apply and use an analogous logic for the height.
// Make use of the resize method of the Size object to apply the change.
  
  /**
   * 
   * @param {Size} newSize 
   */
  resize(newSize) {
    const maxX = this.screenSize.width - this.position.x
    const maxY = this.screenSize.height - this.position.y;

    let width = Math.max(1,Math.min(newSize.width, maxX));
    let height = Math.max(1,Math.min(newSize.height, maxY));
    
    this.size.resize(width, height);

  }

// Remember to use class syntax for this task. That means you add the method definition directly in the class body.
// To find the correct values for the moving, first think about the desired x position you want to reach, taking the lower bound (0) into account.
// Then, calculate the maximum allowed x value. Consider the screen size and the current width of the window.
// With those two values, you can then decide what to apply and use an analogous logic for the height.
// Make use of the move method of the Position object to apply the change.

  /**
   * 
   * @param {Position} newPosition 
   */
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width
    const maxY = this.screenSize.height - this.size.height

    const x = Math.max(0, Math.min(newPosition.x, maxX));
    const y = Math.max(0, Math.min(newPosition.y, maxY));
    this.position.move(x, y)
  }

  
}

// First, define a changeWindow function and make sure to export it.
// Create an instance of the Size class using the new keyword and provide the desired dimensions as arguments. (Similar for the needed position object.)
// Use the methods defined in tasks 4 and 5. For example, you call a method a of an object obj with obj.a().
// Make sure to return the Window instance received as input.

  /**
   * 
   * @param {ProgramWindow} window 
   */
export function changeWindow(window) {
    window.resize(new Size(400, 300))
    window.move(new Position(100, 150))
    return window
  }

