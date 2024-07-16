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
let namee="Arhaan Ali";
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

