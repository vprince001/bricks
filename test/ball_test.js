describe("ball", function() {
  let ball = new Ball(30, 30, 490, 25, 15, false);

  describe("move", function() {
    it("should increase left of ball by 1 when xStatus is true", function() {
      ball.move();
      chai.assert(ball.left, 49);
    });

    it("should increase bottom of ball by 1 when yStatus is true", function() {
      ball.move();
      chai.assert(ball.bottom, 26);
    });
  });
});
