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

//checked property:
document.getElementById("mycheckboxbutton").onclick=function(){
    const mycheckbox=document.getElementById("mycheckbox");
    const visa=document.getElementById("visabtn");
    const master=document.getElementById("mastercardbtn");
    const payapl=document.getElementById("paypalbtn");
    if(mycheckbox.checked){
        console.log("You have subscribed");
    }else{
        console.log("You have not subsribed");
    }
    if(visa.checked){
        document.getElementById("visalabel").innerHTML="You have payed by Visa";
        console.log("You have payed by Visa");
    }
    else if(master.checked){
        document.getElementById("masterlabel").innerHTML="You have payed by MasterCard";
        console.log("You have payed by MasterCard");
    }
    else if(payapl.checked){
        document.getElementById("paypallabel").innerHTML="You have payed by PayPal";
        console.log("You have payed by PayPal");
    }

}
//nested loop:
let symbol;
symbol=window.prompt("Enter the symbol: ");
let rows;
rows=window.prompt("Enter rows:");
let col;
col=window.prompt("Enter col: ");
for(let i=0;i<rows;i++){
    for(let j=0;j<col;j++){
        document.getElementById("nested").innerHTML +=symbol;
    }
    document.getElementById("nested").innerHTML +="<br>";
}