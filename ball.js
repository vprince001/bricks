class Ball {
  constructor(height, width, left, bottom, borderRadius, xStatus, yStatus) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
    this.borderRadius = borderRadius;
    this.xStatus = xStatus;
    this.yStatus = yStatus;
  }

  move() {
    const upRight = this.xStatus && this.yStatus;
    const upLeft = !this.xStatus && this.yStatus;
    const downLeft = !this.xStatus && !this.yStatus;
    const downRight = this.xStatus == true && !this.yStatus;

    if (upRight) {
      this.left += 1;
      this.bottom += 1;
    }
    if (upLeft) {
      this.left -= 1;
      this.bottom += 1;
    }
    if (downLeft) {
      this.left -= 1;
      this.bottom -= 1;
    }
    if (downRight) {
      this.left += 1;
      this.bottom -= 1;
    }
  }
}
