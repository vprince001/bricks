describe("Paddle", function() {
  let paddle = new Paddle(20, 100, 450, 5);

  describe("moveLeft", function() {
    it("moveLeft : should return left position decreased by 10", function() {
      paddle.moveLeft();
      chai.assert(paddle.getPaddleX(), 440);
    });
  });

  describe("moveRight", function() {
    it("moveRight : should return left position increased by 10", function() {
      paddle.moveRight();
      chai.assert(paddle.getPaddleX(), 460);
    });
  });
});
