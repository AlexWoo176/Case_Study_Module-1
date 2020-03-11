let Ball = function (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.drawBall = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle ='red';
        ctx.fill();
        ctx.closePath();
    };
    this.updateBallPosition = function () {
        this.x += this.dx;
        this.y += this.dy;
    };

    this.handlingBallCollisions = function () {
        if (this.x < this.radius || this.x > myCanvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius || this.y > myCanvas.height - this.radius) {
            this.dy = -this.dy;
        }
    };

    this.checkBall = function () {
        if(this.y > myCanvas.height - this.radius) {
            isGameOver = true;
        }
    };
}
// let ball = new Ball(295, 460, 7, 5, 15);