// nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Welcome Tab
let welcome = "Welcome on JS PlayGround"
document.getElementById("Welcome").onclick=function(){
    alert(welcome)
}

// button1 
let n1 = "Welcome on JS PlayGround"
document.getElementById("welcome").onclick=function(){
    alert(n1)
}

// button2 
let btn2Num1 = 20;
let btn2Num2 = 10;
let sum = btn2Num1+btn2Num2;
document.getElementById("sum").onclick=function(){
    alert("Sum to Two numbers : 20 and 10 is =" + sum)
}
// button3 
let btn3Num1 = 20;
let btn3Num2 = 10;
let product = btn3Num1*btn3Num2;
document.getElementById("product").onclick=function(){
    alert("Sum to Two numbers : 20 and 10 is =" + product)
}
// button4 
let btn4Num1 = 20;
let btn4Num2 = 10;
let modulus = btn4Num1%btn4Num2;
document.getElementById("modulus").onclick=function(){
    alert("Modulus to Two numbers : 20 and 10 is =" + modulus)
}
 // button5
 let btn5= "Hey ! 💕 Just wanted to send you some love and appreciation for being an awesome user! 😊🌟 Keep shining bright! 🌈✨"
 document.getElementById("love").onclick=function(){
    alert(btn5)
}