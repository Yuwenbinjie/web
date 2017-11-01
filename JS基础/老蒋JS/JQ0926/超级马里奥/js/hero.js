//目的：创建一个英雄类的构造函数，在这个函数里拥有所有马里奥的功能

//------------------------
//形参说明：
//selector:英雄选择器 required
//moveFn:移动监听函数  optional
//maxTop:跳动的最大高度


//------------------------
//hero属性说明
//element代表标签
//timer：左右移动定时器
//direction：移动方向，默认向右
//moveFn：左右移动计时器函数
//stopFn：停止左右移动定时器
//maxTop:跳动的最大高度
//jumpFn:跳跃函数
// jumpTimer:跳跃函数定时器
function Hero(obj){
    this.element = document.querySelector(obj.selector);
    this.timer = null;
    this.direction = "right";//left向左，right向右
    this.maxTop = obj.maxTop?obj.maxTop:100;
    this.curentTop = this.element.offsetTop;
    this.tapCapCount = 0;//点击空格的次数
    this.move = function(){
    	this.stop();
    	var offvalue = this.direction == "right"?5:-5;
    	var temp = this;

       this.timer = setInterval(function(){
          var offleft = temp.element.offsetLeft;
          console.log(temp)
          temp.element.style.left = offleft + offvalue +"px";
          if(obj.moveFn){
          	obj.moveFn.call(temp);
          }
       },10)

    }
    this.stop=function(){
    	clearInterval(this.timer);
    }


    this.jump = function(){
    	this.tapCapCount++;
    	if(this.tapCapCount>2){
    		return;
    	}
    	var curentTop = this.element.offsetTop;
    	var temp = this;
    	var value = -5;
    	clearInterval(this.jumpTimer);
    	this.jumpTimer = setInterval(function(){
        var nowTop = temp.element.offsetTop;
        temp.element.style.top = nowTop + value +"px";
        if(Math.abs(temp.element.offsetTop - curentTop)>=temp.maxTop){
        	value = 5;
        }
        if(temp.element.offsetTop == temp.curentTop&&value>0){
        	temp.tapCapCount=0;
        	clearInterval(temp.jumpTimer);
        }
        },20);
    }
}