let Brick = function () {
    this.offsetX = 25;
    this.offsetY = 40;
    this.margin = 15;
    this.width = 80;
    this.height = 15;
    this.totalRow = 6;
    this.totalCol = 6;
    BrickList = [];

    for (let i = 0; i < this.totalRow; i++) {
        for (let j = 0; j < this.totalCol; j++) {
            BrickList.push({
                x: this.offsetX + j * (this.width + this.margin),
                y: this.offsetY + i * (this.height + this.margin),
                isBroken: false
            })
        }
    }

    this.drawBrick = function () {
        BrickList.forEach(function (b) {
            if (!b.isBroken) {
                ctx.beginPath();
                ctx.rect(b.x, b.y, brick.width, brick.height);
                ctx.fillStyle = 'brown';
                ctx.fill();
                ctx.closePath();
            }
        })
    }

    this.handlingBallCollisionsBrick = function () {
        BrickList.forEach(function (b) {
            if (!b.isBroken) {
                if (ball.x >= b.x && ball.x <= b.x + brick.width &&
                    ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y + brick.height) {
                    ball.dy = -ball.dy;
                    b.isBroken = true;
                    UserScore += 1;
                    if(UserScore >= MaxScore) {
                        isGameOver = true;
                        isGameWin = true;
                    }
                }
            }
        })
    }
}
let brick = new Brick();
let UserScore = 0;
let MaxScore = brick.totalRow * brick.totalCol;