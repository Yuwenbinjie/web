// alert(123);
"use strict"

// function worthless(){
// 	console.log(this);
// }
// worthless();


//实例化promise对象
let myPromise = new Promise((resolve,reject)=>{
	
	setTimeout(()=>{
		resolve("成功时，显示这句话！");
	},1000);
	// setTimeout(()=>{
	// 	reject("error:网络连接失败");
	// },500);

});
/*myPromise.then((data) => {
   console.log(data);
},(err) => {
	console.log(err);
});*/

/*myPromise.then((data) => {
   console.log(data);
}).catch((err) => {
	console.log(err);
});*/

/*let myPromise2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("队列中第二个成功时，显示这句话！");
	},2000);
})

Promise.all([myPromise,myPromise2]).then((data)=>{
	console.log(data);
}).catch((err)=>{
	console.log(err);
})*/

/*
  promise
  then():第一个回调函数，在成功时触发，第二个回调函数失败时触发
  catch():负责捕获异常信息
*/

fetch(" http://localhost:3000/users").then((res)=>{
	res.json().then((data)=>{
		console.log(data);
	})
}).catch((err)=>{
		console.log("请求失败！");
	})
	
