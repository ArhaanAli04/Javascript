let a;
let b;
let c;
document.getElementById("mybutton").onclick=function(){

    a=document.getElementById("atext").value;
    a=Number(a);
    b=document.getElementById("btext").value;
    b=Number(b);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("cLabel").innerHTML=" The value of Side C is: " +c;

}
let count =0;
document.getElementById("decrease").onclick=function(){
    count=count-1;
    document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("increase").onclick=function(){
    count=count+1;
    document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("countlabel").innerHTML=count;
}