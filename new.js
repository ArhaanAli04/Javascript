const nameTag=document.createElement("h3");
nameTag.textContent="Today is 27th of July";
document.body.append(nameTag); 

const list=document.querySelector("#fruits");
const listItem=document.createElement("li");
listItem.textContent="mango";
list.append(listItem);
/*
let count =0;
document.getElementById("1").onclick=function(){
    if(document.getElementById("add")){
        count=count +1;
    }
    else if(document.getElementById("subtract")){
        count =count-1;
    }
    document.getElementById("result").innerHTML=count;

} */


//cookies:
console.log(navigator.cookieEnabled);    