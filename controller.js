const addPixelSuffix = content => content + "px";

const toggleState = function(state) {
  if (state) {
    return false;
  }
  return true;
};

const manageKeyEvents = function(document, classes, countUp) {
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

  if (event.key == "Enter" && countUp() == 1) {
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
  main.onkeydown = manageKeyEvents.bind(null, document, classes, countUp);
};

const declareGameOver = function(ball, bottomWall, moveBall) {
  const isCollidingBottomWall = ball.bottom == bottomWall.bottom;
  if (isCollidingBottomWall) {
    clearInterval(moveBall);
    alert("GAME OVER");
  }
};

const collidingTopWall = function(topWall, ball) {
  let topWallY = topWall.bottom - ball.width;
  const isColliding = ball.bottom == topWallY;
  if (isColliding) {
    ball.yStatus = toggleState(ball.yStatus);
  }
};

const collidingSideWalls = function(rightWall, leftWall, ball) {
  let rightWallX = rightWall.left - ball.width;
  const isColliding = ball.left == rightWallX || ball.left == leftWall.left;

  if (isColliding) {
    ball.xStatus = toggleState(ball.xStatus);
  }
};

const collidingPaddle = function(paddle, ball) {
  const paddleTop = paddle.bottom + paddle.height;

  const isInPaddleRange =
    ball.left > paddle.left - ball.borderRadius &&
    ball.left < paddle.left + paddle.width + ball.borderRadius;

  const isColliding = ball.bottom == paddleTop && isInPaddleRange;
  if (isColliding) {
    ball.yStatus = toggleState(ball.yStatus);
  }
};

const changeDirection = function(classes) {
  let { paddle, rightWall, leftWall, topWall, ball } = classes;

  collidingPaddle(paddle, ball);
  collidingSideWalls(rightWall, leftWall, ball);
  collidingTopWall(topWall, ball);
};

const startBall = function(document, classes) {
  const { ball, bottomWall } = classes;
  const ballStyle = document.getElementById("ball1").style;

  let moveBall = setInterval(function() {
    ball.move();
    ballStyle.left = addPixelSuffix(ball.left);
    ballStyle.bottom = addPixelSuffix(ball.bottom);
    changeDirection(classes, document);
    declareGameOver(ball, bottomWall, moveBall);
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
  return drawObject(objectDiv.style, classInstance);
};

const createObjects = function(document, classes) {
  const { paddle, ball, rightWall, leftWall, topWall, bottomWall } = classes;

  generateObject(document, paddle, "paddle", "paddle1"); //document, classInstance, divClassName, divId
  generateObject(document, ball, "ball", "ball1");
  generateObject(document, rightWall, "wall", "rightWall");
  generateObject(document, leftWall, "wall", "leftWall");
  generateObject(document, topWall, "wall", "topWall");
  generateObject(document, bottomWall, "wall", "bottomWall");
};

const createClasses = function() {
  const classes = {
    paddle: new Paddle(20, 150, 425, 0, 0), //height, width, left, bottom, border-radius
    ball: new Ball(30, 30, 490, 20, 15, true, true), //....xStatus, yStatus
    rightWall: new RightWall(650, 0, 1000, 0, 0),
    leftWall: new LeftWall(650, 0, 0, 0, 0),
    topWall: new TopWall(0, 1000, 0, 650, 0),
    bottomWall: new BottomWall(0, 1000, 0, 0, 0)
  };
  return classes;
};

const initializeGame = function() {
  const classes = createClasses();
  createObjects(document, classes);
  addEventListener(document, classes);
};

window.onload = initializeGame;
