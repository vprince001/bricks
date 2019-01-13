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
    if (this.xStatus && this.yStatus) {
      this.left += 1;
      this.bottom += 1;
    }
    if (!this.xStatus && this.yStatus) {
      this.left -= 1;
      this.bottom += 1;
    }
    if (!this.xStatus && !this.yStatus) {
      this.left -= 1;
      this.bottom -= 1;
    }
    if (this.xStatus == true && !this.yStatus) {
      this.left += 1;
      this.bottom -= 1;
    }
  }
}
