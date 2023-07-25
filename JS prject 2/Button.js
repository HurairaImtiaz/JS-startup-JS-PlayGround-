
let myName ="";
document.getElementById("btnName").onclick = function(){
    myName = prompt("What is your Name ?")
}
document.getElementById("btn1").onclick = function(){
    alert("Your Name is : "+myName)
}
let myEmail="";
document.getElementById("btnEmail").onclick = function(){
    myEmail = prompt("Write your Email Plaese!") 
}
document.getElementById("btn2").onclick = function(){
    alert("Your Email is : "+myEmail)
}
