	function wheel(obj,f1,f2){
		var isFirefox=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll": "mousewheel";

		if(addEventListener)//监听事件兼容写法
		{
			obj.addEventListener(isFirefox,function(ev){
			var e = ev || window.event;
			gun(e,f1,f2);
	        },false);
		}else{
			obj.attachEvent('on'+isFirefox,function(ev){//监听事件函数不能传参
			var e = ev || window.event;
			gun(e,f1,f2);
	    });
		}
		
	}

	function gun(e,downfn,upfn){
		if(e.wheelDelta){//鼠标滚动事件兼容写法
			if(e.wheelDelta<0){
			   if(upfn){
				   console.log('非火狐内容向上滚动');
				   upfn();
			}
		    }else{
			    if(downfn){
				   downfn();
				   console.log('非火狐内容向下滚动');
			    }
		    }
		}else{
			if(e.detail>0){
			   if(upfn){
				   upfn();
				   console.log('火狐内容向上滚动');
			}
		    }else{
			    if(downfn){
				   downfn();
				   console.log('火狐内容向下滚动');
			    }
		    }
		}
	}

	