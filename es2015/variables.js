// let name = "jacob";
// console.log(name);

//let & var 区别：let拥有域的概念



//var函数
// function say(){
//   var name = "job";
// }
// console.log(name);//undefined
//在js中，var变量作用域仅限于函数中
//let的作用域仅限于自身作用域{}内



//let函数
// function say1(){
//   let name = "marry";
// }
// say1();
// console.log(name);



// if(true){
//   var name = "marry";
//   let name1 = "marry";
// }
// console.log(name);
// console.log(name1);//let定义的变量，出了if则销毁



for(let i=0;i<10;i++){
  console.log(i);
}
console.log("循环外：",i);//出了for循环花括号，则销毁


const a = "jkashdjkhkasd1234";//常量是在程序运行中，不可以被改变的量
// a = "123";
console.log(a);



//template模版语法
var first = "Job";
var last = "marry";
// console.log("我的全名："+first+last);
console.log(`我的全名：${first}${last}`);
