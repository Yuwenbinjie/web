//箭头函数
// let add = (a,b) => {
//   return a+b;
// }
// console.log(add(2,3));



/*let nums=[2,3,4,5];
//将数组中的值进行翻倍
// for(let i=0;i<nums.length;i++){
//   console.log(nums[i]*2);
// } //for不常用

// let doubles = nums.map(function(n){//es5
//   return n*2;
// });

let doubles = nums.map((n)=>{//es6,一个参数时()可以省略
  return n*2;
});
console.log(doubles);*/


// let person = {
//   name:"Bob",
//   sayName:()=>{//这样不行
//     console.log(`hello ${this.name}`);
//   }
// }

//实现打招呼
// let person = {
//   name:"Bob",
//   sayName(){//vue框架对象中常用
//     console.log(`hello ${this.name}`);
//   }
// }

//实现es5数组遍历
/*let person = {
  name:"Bob",
  hobbies:["打篮球","写代码","王者"],
  showHobbies:function(){
  	let self = this;
  	this.hobbies.forEach(function(hobby){
  		// console.log(this);
  		console.log(`${self.name}的爱好是${hobby}`);
  	});
  }
}
person.showHobbies();*/



//实现es6数组遍历,
//ES6中this找不到任何指向会指向上一级，ES5中this找不到任何指向会指向window对象
let person = {
  name:"Bob",
  hobbies:["打篮球","写代码","王者"],
  showHobbies(){
  	this.hobbies.forEach((hobby) => {
  		console.log(`${this.name}的爱好是${hobby}`);
  	});
  }
}
person.showHobbies();




