
function mouseWheel(obj,f1,f2){
      obj.onmousewheel = function(ev){
            var e = ev || window.event;
            gun(e,f1,f2);
      }
}

function gun(m,downfn,upfn){
      console.log(m.wheelDelta);
      if(m.wheelDelta<0){
            if(upfn){
               upfn();   
            }
            
      }else{
            if(downfn){
               downfn();   
            }
      }
}