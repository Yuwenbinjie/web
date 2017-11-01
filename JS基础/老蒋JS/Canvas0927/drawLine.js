function Draw(array, canvas, obj) {
    var ctx = canvas.getContext("2d");
    this.ctxWidth = canvas.width;
    this.ctxHeight = canvas.height;
    this.points = [];

    this.drawPiex = function() {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, this.ctxHeight - 50);
        ctx.lineTo(this.ctxWidth - 50, this.ctxHeight - 50);
        ctx.moveTo(40, 60);
        ctx.lineTo(50, 50);
        ctx.lineTo(60, 60);
        ctx.moveTo(this.ctxWidth - 60, this.ctxHeight - 60);
        ctx.lineTo(this.ctxWidth - 50, this.ctxHeight - 50);
        ctx.lineTo(this.ctxWidth - 60, this.ctxHeight - 40);
        ctx.stroke();
        ctx.closePath();
    }
    this.drawPoint = function() {
        var length = array.length;
        var x_dis = this.ctxWidth - 100 - 10;
        var per_disX = x_dis / length;
        var y_dis = this.ctxHeight - 110;
        var scale = y_dis / this.getMaxY();
        for (var i = 0; i < array.length; i++) {
            var x = (i + 1) * per_disX + 50;
            var y = this.ctxHeight - scale * array[i].value - 50;
            var p = new Point(x, y);
            this.points.push(p);
        }
        this.beginDrawPoint();
        this.text();
        this.wang();
    }
    this.beginDrawPoint = function() {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.strokeStyle = obj.color;
        ctx.lineWidth = obj.lineWidth;
        ctx.stroke();
        ctx.closePath();

    }
    //绘制网格
    this.wang=function(){
        ctx.beginPath();
        ctx.strokeStyle="#999";
        var perY = this.ctxHeight/5;
        console.log(perY)
        for(var i=0;i<5;i++){
            ctx.moveTo(50,perY*(i+1)-50);
            ctx.lineTo(this.ctxWidth - 50,perY*(i+1)-50);
        }
        for(var i=0;i<this.points.length;i++){
            ctx.moveTo(this.points[i].x,this.ctxHeight - 50)
            ctx.lineTo(this.points[i].x,50);
        }
        ctx.lineWidth="1";
        ctx.stroke();
        ctx.closePath();
    }

    //绘制文字
    this.text=function(){
        ctx.beginPath();
        ctx.strokeStyle="red";
        for(var i=0;i<this.points.length;i++){
            ctx.strokeText(array[i].name,this.points[i].x,this.ctxHeight - 30);
        }
        ctx.closePath();
    }

    this.getMaxY = function() {
        var max = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i].value > max) {
                max = array[i].value;
            }
        }
        return max;
    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}
