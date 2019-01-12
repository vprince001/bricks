class Paddle {
  constructor(height, width, left, bottom) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
  }

  moveLeft() {
    this.left -= 10;
  }

  moveRight() {
    this.left += 10;
  }

  getPaddleX() {
    return this.left;
  }
}
