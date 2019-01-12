const movePaddle = function(document, paddle) {
  const paddleStyle = document.getElementById("paddleId").style;

  if (event.key == "ArrowLeft") {
    paddle.moveLeft();
    paddleStyle.left = addPixelSuffix(paddle.getPaddleX());
  }

  if (event.key == "ArrowRight") {
    paddle.moveRight();
    paddleStyle.left = addPixelSuffix(paddle.getPaddleX());
  }
};

const addEventListener = function(document, paddle) {
  let main = document.getElementById("gameArea");
  main.focus();
  main.onkeydown = movePaddle.bind(null, document, paddle);
};

const drawBall = function(ballDiv, ball) {
  ballDiv.style.height = addPixelSuffix(ball.height);
  ballDiv.style.width = addPixelSuffix(ball.width);
  ballDiv.style.left = addPixelSuffix(ball.left);
  ballDiv.style.bottom = addPixelSuffix(ball.bottom);
};

const createBall = function(document, ball) {
  let ballDiv = document.createElement("div");
  ballDiv.className = "ball";
  ballDiv.id = "ballId";
  document.getElementById("gameArea").appendChild(ballDiv);
  drawBall(ballDiv, ball);
};

const addPixelSuffix = content => content + "px";

const drawPaddle = function(paddleDiv, paddle) {
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
};

const createPaddle = function(document, paddle) {
  let paddleDiv = document.createElement("div");
  paddleDiv.className = "paddle";
  paddleDiv.id = "paddleId";
  document.getElementById("gameArea").appendChild(paddleDiv);
  drawPaddle(paddleDiv, paddle);
};

const initialize = function() {
  let paddle = new Paddle(20, 100, 450, 5);
  let ball = new Ball(20, 20, 490, 25);
  createPaddle(document, paddle);
  createBall(document, ball);
  addEventListener(document, paddle);
};

window.onload = initialize;
