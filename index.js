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
let arr=[10,87,45,20,60];
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