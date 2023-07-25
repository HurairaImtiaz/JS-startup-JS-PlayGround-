
let myName ="";
document.getElementById("btnName").onclick = function(){
    myName = prompt("What is your Name ?")
}
document.getElementById("btn1").onclick = function(){
    alert("Your Name is : "+myName)
}
