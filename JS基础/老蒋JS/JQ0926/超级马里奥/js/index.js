//1.判断两个标签其中一个是否超出范围
function judgeBorder(son,father){
   if(son.offsetLeft<=0){
   	son.style.left = 0;
   }
   if(son.offsetLeft>=father.offsetWidth/2-son.offsetWidth){
   	son.style.left = father.offsetWidth/2-son.offsetWidth+"px";
   	changeBackPosition(father);
   }
}
//2.改变背景图片
function changeBackPosition(element){
	var a = getValue(element,"backgroundPosition");
	var value = a.replace(/px/g,"");
	var arr = value.split(" ");
	var v_x = Number(arr[0]);
	v_x -= 5;
	element.style.backgroundPosition = v_x +"px 0";
}
function getValue(element,key){
	if(element.currentStyle){
		element.currentStyle[key];
	}else{
		return getComputedStyle(element,null)[key];
	}
}