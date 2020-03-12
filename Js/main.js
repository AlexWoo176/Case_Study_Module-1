let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
let isGameOver = false;
let isGameWin = false;

function playgame () {
    // requestAnimationFrame(playgame);
    if(!isGameOver) {
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ball.drawBall();
        ball.updateBallPosition();
        ball.handlingBallCollisions();
        ball.checkBallWidthBorder();
        paddle.drawPaddle();
        paddle.movingEdgePaddle();
        paddle.checkMovingPaddle();
        paddle.handlingPaddleCollisionsWithBall();
        brick.drawBrick();
        brick.handlingBallCollisionsBrick();
        requestAnimationFrame(playgame);
    } else {
        if (isGameWin) {
            alert('YOU WIN');
        } else {
            alert('YOU LOSE')
        }
    }
};

function restart() {
    document.location.reload();
};