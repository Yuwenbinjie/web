function move(obj,endTime)
{
	    // var x=obj.offsetLeft;
	    var x=0;
		var timer=setInterval(function(){
			x++;
            obj.style.left=x+'px';
            if(x>=500){
            	if(endTime)
            	{
            		endTime();
            	}
            	clearInterval(timer);
            }
		},10)	
}

function mouseWheel(obj,f1,f2){
      console.log(123);
      obj.onmouseWheel = function(ev){
            var e = ev || window.event;
            gun(e,f1,f2);
      }
}
function gun(m,downfn,upfn){
      console.log(m.WheelDalta);
      if(m.WheelDalta<0){
            upfn();
      }else{
            downfn();
      }
}