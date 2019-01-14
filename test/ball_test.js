describe("ball", function() {
  describe("move", function() {
    it("should increase ball left by 1 when xStatus is true", function() {
      let ball = new Ball(30, 30, 490, 25, 15, true, true);
      ball.move();
      chai.assert.equal(ball.left, 491);
    });

    it("should increase ball bottom by 1 when yStatus is true", function() {
      let ball = new Ball(30, 30, 490, 25, 15, true, true);
      ball.move();
      chai.assert.equal(ball.bottom, 26);
    });

    it("should decrease ball left by 1 when xStatus is false", function() {
      let ball = new Ball(30, 30, 490, 25, 15, false, true);
      ball.move();
      chai.assert.equal(ball.left, 489);
    });

    it("should decrease ball bottom by 1 when yStatus is false", function() {
      let ball = new Ball(30, 30, 490, 25, 15, true, false);
      ball.move();
      chai.assert.equal(ball.bottom, 24);
    });
  });
});
