const PARAMETERKEYBOARD = {
    KEYLEFT: 37,
    KEYRIGHT: 39
};
let Paddle = function (x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;

    // Vẽ Thanh Chắn ngang
    this.drawPaddle = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this,width, this.height);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    };

    // Kiểm tra di chuyển của thanh chắn
    this.checkMovingPaddle = function () {
        if(this.isMovingLeft) {
            this.x -= this.speed;
        } else if (this.isMovingRight) {
            this.x += this.speed;
        }
    };

    // Xử lý di chuyển của thanh chắn với hai biên
    this.movingEdgePaddle = function () {
        if(this.x < 0) {
            this.x = 0;
        } else if (this.x > myCanvas.width - this.width) {
            this.x = myCanvas.width - this.width;
        }
    };

    // Xử lý va chạm giữa thanh chắn và bóng
    this.handlingPaddleCollisionsWithBall = function () {
        if (ball.x + ball.radius >= this.x && ball.x + ball.radius <= this.x + this.width &&
        ball.y +ball.radius >= myCanvas.height - this.height) {
            ball.dy = -ball.dy;
        }
    };

    // Xủ lý bắt sự kiện của bàn phím với thanh chắn

    document.addEventListener("keyup", function (event) {
        if (event.keyCode == PARAMETERKEYBOARD.KEYLEFT) {
            paddle.isMovingLeft = false;
        } else if (event.keyCode == PARAMETERKEYBOARD.KEYRIGHT) {
            paddle.isMovingRight = false;
        }
    });
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == PARAMETERKEYBOARD.KEYLEFT) {
            paddle.isMovingLeft = true;
        } else if (event.keyCode == PARAMETERKEYBOARD.KEYRIGHT) {
            paddle.isMovingRight = true;
        }
    });
};
let paddle = new Paddle(250, myCanvas.height - 20, 100, 20, 10);
