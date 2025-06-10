window.onload = function () {
  const ball = document.getElementById("ball");
  const paddleLeft = document.getElementById("paddleLeft");
  const paddleRight = document.getElementById("paddleRight");

  const fieldWidth = 400;
  const fieldHeight = 250;

  let ballX = 194;
  let ballY = 120;
  let dx = 2;
  let dy = 2;

  let paddleLeftY = 100;
  let paddleRightY = 100;
  const paddleSpeed = 3;

  function move() {
    ballX += dx;
    ballY += dy;

    if (ballY <= 0 || ballY >= fieldHeight - 12) dy *= -1;

    if (
      (ballX <= 10 && ballY + 12 >= paddleLeftY && ballY <= paddleLeftY + 50) ||
      (ballX >= fieldWidth - 22 && ballY + 12 >= paddleRightY && ballY <= paddleRightY + 50)
    ) {
      dx *= -1;
    }

    if (ballX <= 0 || ballX >= fieldWidth - 12) dx *= -1;

    if (ballX < fieldWidth / 2) {
      if (ballY < paddleLeftY + 20) paddleLeftY -= paddleSpeed;
      else if (ballY > paddleLeftY + 30) paddleLeftY += paddleSpeed;
    }

    if (ballX > fieldWidth / 2) {
      if (ballY < paddleRightY + 20) paddleRightY -= paddleSpeed;
      else if (ballY > paddleRightY + 30) paddleRightY += paddleSpeed;
    }

    paddleLeftY = Math.max(0, Math.min(fieldHeight - 50, paddleLeftY));
    paddleRightY = Math.max(0, Math.min(fieldHeight - 50, paddleRightY));

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
    paddleLeft.style.top = paddleLeftY + "px";
    paddleRight.style.top = paddleRightY + "px";

    requestAnimationFrame(move);
  }

  move();
};
