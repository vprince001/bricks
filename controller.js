const addPixelSuffix = content => content + "px";

const toggleState = function(state) {
  if (state) {
    return false;
  }
  return true;
};

const movePaddle = function(document, classes, countUp) {
  const { paddle } = classes;
  const paddleStyle = document.getElementById("paddle1").style;
  if (event.key == "ArrowLeft") {
    paddle.moveLeft();
    paddleStyle.left = addPixelSuffix(paddle.left);
  }

  if (event.key == "ArrowRight") {
    paddle.moveRight();
    paddleStyle.left = addPixelSuffix(paddle.left);
  }

  if (event.key == "s" && countUp() == 1) {
    startBall(document, classes);
  }
};

const makeCounter = function(countInitializer) {
  let counter = countInitializer;
  return function() {
    return counter++;
  };
};

const addEventListener = function(document, classes) {
  let main = document.getElementById("gameArea");
  main.focus();
  const countUp = makeCounter(1);
  main.onkeydown = movePaddle.bind(null, document, classes, countUp);
};

const declareGameOver = function(ball, bottomWall, moveBall) {
  if (ball.bottom == bottomWall.bottom) {
    clearInterval(moveBall);
    alert("GAME OVER");
  }
};

const changeDirection = function(classes) {
  let { paddle, ball, rightWall, topWall, leftWall } = classes;
  let paddleTop = 24;

  let rightWallX = rightWall.left - ball.width;
  let topWallY = topWall.bottom - ball.width;

  const isInPaddleRange =
    ball.left > paddle.left - ball.borderRadius &&
    ball.left < paddle.left + paddle.width + ball.borderRadius;

  const collideWithSideWalls =
    ball.left == rightWallX || ball.left == leftWall.left;
  const collideWithTopWall = ball.bottom == topWallY;
  const collideWithPaddle = ball.bottom == paddleTop && isInPaddleRange;

  if (collideWithSideWalls) {
    ball.xStatus = toggleState(ball.xStatus);
  }

  if (collideWithTopWall) {
    ball.yStatus = toggleState(ball.yStatus);
  }

  if (collideWithPaddle) {
    ball.yStatus = toggleState(ball.yStatus);
  }
};

const startBall = function(document, classes) {
  let { ball, bottomWall } = classes;
  const ballStyle = document.getElementById("ball1").style;

  let moveBall = setInterval(function() {
    changeDirection(classes);
    declareGameOver(ball, bottomWall, moveBall);

    ball.move();
    ballStyle.left = addPixelSuffix(ball.left);
    ballStyle.bottom = addPixelSuffix(ball.bottom);
  }, 5);
};

const drawObject = function(objectStyle, classInstance) {
  objectStyle.height = addPixelSuffix(classInstance.height);
  objectStyle.width = addPixelSuffix(classInstance.width);
  objectStyle.left = addPixelSuffix(classInstance.left);
  objectStyle.bottom = addPixelSuffix(classInstance.bottom);
  objectStyle.borderRadius = addPixelSuffix(classInstance.borderRadius);
};

const generateObject = function(document, classInstance, divClassName, divId) {
  const objectDiv = document.createElement("div");
  objectDiv.className = divClassName;
  objectDiv.id = divId;
  document.getElementById("gameArea").appendChild(objectDiv);
  drawObject(objectDiv.style, classInstance);
};

const createObjects = function(document, classes) {
  const { paddle, ball, rightWall, leftWall, topWall, bottomWall } = classes;

  generateObject(document, paddle, "paddle", "paddle1");
  generateObject(document, ball, "ball", "ball1");
  generateObject(document, rightWall, "wall", "rightWall");
  generateObject(document, leftWall, "wall", "leftWall");
  generateObject(document, topWall, "wall", "topWall");
  generateObject(document, bottomWall, "bottom-Wall", "bottomWall");
};

const createClasses = function() {
  const classes = {
    paddle: new Paddle(20, 100, 450, 5, 0), //height, width, left, bottom, border-radius
    ball: new Ball(30, 30, 490, 25, 15, true, true), //....xStatus, yStatus
    rightWall: new RightWall(650, 3, 997, 0, 0),
    leftWall: new LeftWall(650, 3, 0, 0, 0),
    topWall: new TopWall(3, 1000, 0, 650, 0),
    bottomWall: new BottomWall(5, 1000, 0, 0, 0)
  };
  return classes;
};

const initializeGame = function() {
  const classes = createClasses();
  createObjects(document, classes);
  addEventListener(document, classes);
};

window.onload = initializeGame;
