let Ball = function (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // Vẽ bóng
    this.drawBall = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle ='red';
        ctx.fill();
        ctx.closePath();
    };
    // Tọa độ bóng thay đổi khi vẽ lại
    this.updateBallPosition = function () {
        this.x += this.dx;
        this.y += this.dy;
    };

    // Va chạm bóng với các đường biên
    this.handlingBallCollisions= function () {
        if (this.x < this.radius || this.x > myCanvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius || this.y > myCanvas.height - this.radius) {
            this.dy = -this.dy;
        }
    };

    // Va chạm bóng với biên dưới
    this.checkBallWidthBorder = function () {
        if(this.y > myCanvas.height - this.radius) {
            isGameOver = true;
        }
    };
}
let ball = new Ball(290, 460, 5, 5, 10);