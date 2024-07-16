let grade;
document.getElementById("mybutton").onclick=function(){
    grade=document.getElementById("gradeinput").value;
    grade=Number(grade);
    console.log("Your marks are: ",grade);
    document.getElementById("markshow").innerHTML="Your marks are :" +grade;
    switch(true){
        case grade>=90:
            document.getElementById("gradeshow").innerHTML="Your grade is A";
            console.log("Your grade is A");
            break;
        case grade>=80:
            document.getElementById("gradeshow").innerHTML="Your grade is B";
            console.log("Your grade is B");
            break;
        case grade>=70:
            document.getElementById("gradeshow").innerHTML="Your grade is C";
            console.log("Your grade is C");
            break;
        case grade>=60:
            document.getElementById("gradeshow").innerHTML="Your grade is D";
            console.log("Your grade is D");
            break;
        case grade>=50:
            document.getElementById("gradeshow").innerHTML="Your grade is E";
            console.log("Your grade is E");
            break;        

    }


}