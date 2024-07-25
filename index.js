console.log("Hello,how are you");
//window.alert("This is a pop-up");
let age=19;
console.log(age);
let fname="John";
console.log("hello",fname,"how are you");
let student=true;
console.log(student);
document.getElementById("p1").innerHTML="Hello "+ fname;
document.getElementById("p2").innerHTML="You are  "+ age + " years old";
document.getElementById("p3").innerHTML="Are you a student: "+student;

//USER INPUT:
//using window prompt:
let username=window.prompt("Enter your name: ");
console.log(username);
//using HTML textbox:
let myname;
document.getElementById("myButton").onclick=function(){
    myname=document.getElementById("myText").value;
    console.log("Hello ",myname);
    //changing label enter your name:
    document.getElementById("myLabel").innerHTML="Hello "+myname;
}

//type conversion:
let x=20;
x=String(x);
console.log(x,typeof x);
let y="200";
y=Number(y);
y=y+29;
console.log(y,typeof y);

//constants:
const PI=3.14;
let radius;
let circumferenece;
radius=window.prompt("Enter the radius: ");
radius=Number(radius);
circumferenece=2*PI*radius;
console.log("The circumference is given by: ",circumferenece);

//math:
let a=3.67;
//a=Math.round(a); 4
//a=Math.ceil(a); 4
//a=Math.floor(a); 3
//a=Math.pow(a,3);
let b=6;
let c=2;
let mx;
mx=Math.max(a,b,c);
mi=Math.min(a,b,c);
console.log(mx);
console.log(mi);

//string methods:
/*let namee="Arhaan Ali";
console.log("Lenght of string: ",namee.length);
console.log("First index of h: ",namee.indexOf("h"));
console.log("Last idnex if a: ",namee.lastIndexOf("a"));
console.log("String without spaces: ",namee.trim());
console.log(namee.toUpperCase());
let firstname;
let lastname;
firstname=namee.slice(0,namee.indexOf(" "));
lastname=namee.slice(namee.indexOf(" ")+1);
console.log("First name is: ",firstname);
console.log("Last name is: ",lastname);

// for loop:
for(let i=1;i<10;i++){
    console.log(i);
}

//functions:
function greet(a,b){
    console.log("Hello",a);
    console.log("Your age is",b);
}
greet(namee,age);
let l;
l=window.prompt("Enter lenght: ");
let breadth;
breadth=window.prompt("Enter breadth: ");
let result;
result=area(l,breadth);
console.log("The area is : ",result);
function area(l,breadth){
    return l*breadth;
} */


//ternary operator:
let adult=checkage(13);
console.log(adult);
function checkage(myage){
    return myage>=18?true:false;
}    
//arrays:
/*let arr=[10,87,45,20,60];
console.log(arr);
arr.push(99);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(1);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.indexOf(45));
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//or
for(let i of arr){
    console.log(i);
}
//sort an array:
arr=arr.sort();
console.log("Array in sorted order :",arr);
arr=arr.sort().reverse();
console.log("Array in reverse order: ",arr);

//2d array:
let arr1=["india","england","australia"];
let arr2=["cricket","football","basketball"];
let arr3=[arr1,arr2];
console.log(arr3);

//spread operator:
let str="Cricket";
console.log(...str);
console.log(Math.max(arr));// will give NaN
console.log(Math.max(...arr)); //will give max number from arr

//rest parameters
let a1=2;
let a2=3;
let a3=4;
let a4=5;
function sum(...numbers){
    let total=0;
    for(let i of numbers){
        total +=i;
    }
    return total;
}
console.log(sum(a1,a2,a3));

//callback:
function mysum(a,b,func){
    let result=a+b;
    func(result);
}
function display(total){
    console.log(total);
}
mysum(10,20,display);

//nested functions:
let yourname="Jack";
let inbox=2;
login();
function login(){
    function showName(){
        console.log(`Hello ${yourname}`);
    }
    function showInbox(){
        console.log(`You have ${inbox} messages`);
    }
    showName();
    showInbox();
}*/
//function expression:
const greet=function(){
    console.log("Hello, today's a good day!");
}
greet();

//arrow function:
const tellAge=(abc)=> console.log(`Hello ${abc}`);
tellAge("JOHN");

//maps
const Store=new Map([
    ["shirt",200],
    ["tshirt",150],
    ["jeans",400],
    ["trousers",600]
]);

Store.forEach((value, key) => {
    console.log(`${key}  ${value}`);
});
/*
let cart=0;
cart += Store.get("jeans");// value will be 400
cart +=Store.get("trousers");
console.log(cart);

Store.set("hat",280);
Store.forEach((value,key) => {
    console.log(`${key},${value}`);
}
)
Store.delete("trousers");
Store.forEach((value,key) =>{
    console.log(`${key},${value}`);
}) */
console.log(Store.size);
console.log("Does the store have jeans:",Store.has("jeans"));

/*
let myArr=[20,40,87,65,90];
for(let i=0;i<myArr.length;i++){
    console.log(myArr[i]);
}
myArr.forEach(i =>{
    console.log(i);

}) */

//objects:
/*const myCar={
    brand:"Mercedes",
    year: 2020,
    color:"Black",
    price:"2 Crore",
    drive: function(){
        console.log("This car can drive at 300kph");
    },
    showModel: function(){
        console.log(`The model of the car is ${this.brand}`);

    }
}    
console.log(myCar.brand);
console.log(myCar.price);
myCar.drive();
myCar.showModel();

class Game{
    score=0;
    start(){
        console.log("You have started the game");
    }
    exit(){
        console.log("You have exited the game");
    }
}
const obj=new Game();
obj.start();
obj.exit();
obj.score=100;
console.log(obj.score);

//constructors:
class Student{
    constructor(name,gpa,age){
        this.name=name;
        this.gpa=gpa;
        this.age=age;
    }
    display(){
        console.log(`Name if the student is : ${this.name}`);
        console.log(`Gpa of the student is : ${this.gpa}`);
        console.log(`Age of the student is : ${this.age}`);
    }

}
const obj1=new Student("Max",10,2000);
const obj2=new Student("Max",10,2000);
const obj3=new Student("Will",80,2500);
const objArray=[obj1,obj2,obj3];
obj1.display();
console.log(objArray[2].gpa);

//inheritance:
class animal{
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
class cat extends animal{
    name="cat";
    milk(){
        console.log(`${this.name} is drnking milk`);
    }
}
const catobj=new cat();
catobj.sleep();
catobj.milk();
*/

//error handling:


try{
    let inp=window.prompt("Enter a number:");
    inp=Number(inp);
    if(isNaN(inp)) throw "That was not a number";
    if(inp=="") throw "That was empty";
    console.log(`${inp} is a number`);

}
catch(error){
    console.log(error);

}

