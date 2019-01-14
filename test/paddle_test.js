describe("Paddle", function() {
  describe("moveLeft", function() {
    it("should decrease padlle left by 10 when moveLeft method is called", function() {
      let paddle = new Paddle(20, 100, 450, 5);
      paddle.moveLeft();
      chai.assert.equal(paddle.left, 440);
    });
  });

  describe("moveRight", function() {
    it("should increase padlle left by 10 when moveLeft method is called", function() {
      let paddle = new Paddle(20, 100, 450, 5);
      paddle.moveRight();
      chai.assert.equal(paddle.left, 460);
    });
  });
});
