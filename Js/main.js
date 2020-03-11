    let myCanvas = document.getElementById('myCanvas');
    let ctx = myCanvas.getContext('2d');
    let isGameOver = false;
    let ball = new Ball(290, 460, 5, 5, 15);
    let paddle = new Paddle(250, myCanvas.height - 20, 100, 20, 10);
    let brick = new Brick(25,40,15,80,15,6,4,[]);

function playgame () {
    if(!isGameOver) {
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ball.drawBall();
        paddle.drawPaddle();
        brick.drawBrick();
        requestAnimationFrame(playgame);
    } else {
        console.log('GAME OVER');
    }
}
