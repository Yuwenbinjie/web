//ES5 类
/*function Plane(){
	this.wings = 2;
	this.speed = 100;
	this.altitude = 0;

}

const myPlane = new Plane();
//为plane这个类扩展方法
Plane.prototype.fly = function(){
	this.altitude = 3000;
}
myPlane.fly();
function Fight(){
    this.speed = 1000;
}
Fight.prototype = new Plane();
var fight = new Fight();
fight.fly();
console.log(fight.altitude);*/




class Person{
	constructor(name,age){//必须写在constructor里
		this.name = name;
		this.age = age;
	}
	display(){
		console.log(this.age);
	}
	
}
let per = new Person("chaomin",25);
// per.display();
// console.log(per.name);

class Programmer extends Person{
    constructor(name,age,language){
    	super(name,age);
    	this.language = language;
    }
    display(){
		console.log(this.age);
	}
} 
let gaochao = new Programmer("chao",20,"go");
gaochao.display();
console.log(gaochao.language);