//学习分布操作符  解构  argument参数
/*let sum = function(){
    console.log(arguments);//arguments是对象
}*/

//ES5
/*let sum = function(){
    return arguments.reduce(function(prev,curr){
         return prev+curr;
    })
}*/
/*let sum = function(){
    return Array.prototype.reduce.call(arguments,function(prev,curr){
         return prev+curr;
    })
}
console.log(sum(2,3,4,5));*/


//ES6  
/*let sum = function(...args){
    console.log(args);

}
sum(2,3,4,5);*/

/*let sum = function(...args){
	return args.reduce((prev,curr) => {
		return prev + curr;
	})
}
console.log(sum(1,2,3,4));

let nums = [4,2,45,2];
let arr = [1,2,...nums,5,7];//分布操作符
console.log(arr);
*/




// call/apply/bind

/*var obj = {num : 2};
var addTothis = function(a){
  return this.num + a;
}
console.log(addTothis.call(obj,3));*/
//call方法的作用：1.为方法增加对象参数；2.改变函数this的指向


/*var obj = {num : 2};
var addTothis = function(a,b,c){
  return this.num + a + b + c;
}
var arr = [1,2,3];
console.log(addTothis.apply(obj,arr));*/
//apply第一个参数对象，第二个为数组


/*var obj = {num : 2};
var addTothis = function(a,b,c){
  return this.num + a + b + c;
}

let method = addTothis.bind(obj);
console.log(method(1,2,3));*/
//bind参数对象



// 求最大值
// let max = Math.max(13345,4,6,74,1);
// console.log(max);

/*let nums = [13345,4,6,74,1];
let max = Math.max.apply(null,nums);
console.log(max);*/


let nums1 = [135,4,6,74,1];
let max = Math.max(...nums1);
console.log(max);


