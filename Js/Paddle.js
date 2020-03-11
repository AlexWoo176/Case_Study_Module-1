let Paddle = function (x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;

    this.drawPaddle = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this,width, this.height);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    };
    this.checkMovingPaddle = function () {
        if(this.isMovingLeft) {
            this.x -= this.speed;
        } else if (this.isMovingRight) {
            this.x += this.speed;
        }
    };
    this.movingEdgePaddle = function () {
        if(this.x < 0) {
            this.x = 0;
        } else if (this.x > myCanvas.width - this.width) {
            this.x = myCanvas.width - this.width;
        }
    };
    this.handlingPaddleCollisionsWithBall = function () {
        if (ball.x + ball.radius >= this.x && ball.x + ball.radius <= this.x + this.width &&
        ball.y +ball.radius >= myCanvas.height - this.height) {
            ball.dy = -ball.dy;
        }
    };
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 37) {
            paddle.isMovingLeft = false;
        } else if (event.keyCode == 39) {
            paddle.isMovingRight = false;
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 37) {
            paddle.isMovingLeft = true;
        } else if (event.keyCode == 39) {
            paddle.isMovingRight = true;
        }
    });
};
let paddle = new Paddle(250, myCanvas.height - 20, 100, 20, 10);