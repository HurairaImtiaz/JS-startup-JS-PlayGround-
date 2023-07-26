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
var btn2Num1;
var btn2Num2; 

document.getElementById("sum").onclick=function(){
   btn2Num1 = prompt("Enter 1st number : " );
   btn2Num2 = prompt("Enter 2nd number : " );
   
}


document.getElementById("sumCheck").onclick=function(){
  var resultSum = parseInt (btn2Num1) + parseInt (btn2Num2);
    alert("Sum to Two  given numbers is : "+ resultSum)
}

// button3 
var btn3Num1 ;

document.getElementById("product").onclick=function(){
  btn3Num1 = prompt("Enter 1st number : " );
  btn3Num2 = prompt("Enter 2nd number : " );
  
}
document.getElementById("productCheck").onclick=function(){
  var resultProduct = parseInt(btn3Num1) * parseInt(btn3Num2);
  alert("Product to Two  given numbers is : " + resultProduct)
}

// button4 
var btn4Num1 ;
var btn4Num2 ;

document.getElementById("modulus").onclick=function(){
  btn4Num1 = prompt("Enter 1st number : " );
  btn4Num2 = prompt("Enter 2nd number : " );
  
}
document.getElementById("modulusCheck").onclick=function(){
  var resultModulus = parseInt(btn4Num1) % parseInt(btn4Num2) ;
    alert("Modulus to Two numbers : " + resultModulus)
}
 // button5
 let btn5= "Hey ! 💕 Just wanted to send you some love and appreciation for being an awesome user! 😊🌟 Keep shining bright! 🌈✨"
 document.getElementById("love").onclick=function(){
    alert(btn5)
}