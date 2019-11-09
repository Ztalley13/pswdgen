// initial variables for the generator to use
//couldnt make it pull from the array - Ask Anthony or one of the TAs why

var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*()?><-+_';

//creating var to attach to HTML and call function 
var charNum = document.getElementById("charNum");
var numSelect = document.getElementById("num");
var symSelect = document.getElementById("sym");
var submit= document.getElementById("submit");
var myPswd = document.getElementById("myPswd");

// to show info once clicked
submit.addEventListener("click", function(){
   var characters = char;
   (numSelect.checked) ? characters += num : '';//if clicked show. If not blank
   (symSelect.checked) ? characters += sym : '';
    myPswd.value = password(charNum.value, characters);
});

//create functions to make it work

function password(length,characters){
  var pwd = ''; //telling the info to pass into this string
  for(var i = 0; i<length; i++){ //for loop to run the string
    pwd += characters.charAt(Math.floor(Math.random() * characters.length)); // generator random character for the for loop to run the string
  }
  return pwd ;//to return the password
}



  