let Brick = function () {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.margin = margin;
    this.width = width;
    this.height = height;
    this.totalRow = totalRow;
    this.totalCol = totalCol;
    BrickArr = [];

    for (let i = 0; i < this.totalRow; i++) {
        for (let j = 0; j < this.totalCol; j++) {
            BrickArr.push({
                x: this.offsetX + j * (this.width + this.margin),
                y: this.offsetY + i * (this.height + this.margin),
                isBroken: false
            })
        }
    }

    this.drawBrick = function () {
        BrickArr.forEach(function (b) {
            if (!b.isBroken) {
                context.beginPath();
                context.rect(b.x, b.y, brick.width, brick.height);
                context.fillStyle = 'brown';
                context.fill();
                context.closePath();
            }
        })
    }
}
// let brick = new Brick(25,40,15,80,25,6,4,[]);