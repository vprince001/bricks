class Paddle {
  constructor(height, width, left, bottom, borderRadius) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
    this.borderRadius = borderRadius;
  }

  moveLeft() {
    if (this.left > 0) {
      this.left -= 10;
    }
  }

  moveRight() {
    if (this.left < 900) {
      this.left += 10;
    }
  }
}
