// Assignment Code
//the button has this class on it 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

function generatePassword(){
  getParam();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//an array with all uppercase letters 
 const uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// an array with all lowere case  letters
const lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// an array with numbers 
const number = [0,1,2,3,4,5,6,7,8,9];

//an array with special characters 
const specialChar =["!","@","#","$","%","^","&","*"];

// a new array with the created pasword 
let passwordGen =[];

// a variable that will determin the length of the password (prompt)
// has to be linked to the button create pasword 

let length = function(){
  length = prompt("How long would you like your pasword to be ?" );
    if(length < 8 || !length || length > 128){
      alert("This password length is to short of a length the minimum is 8 characters and the maximum is 128 chracters Try Again")
      generatePassword();
    }
}

let special=function (){
  special= prompt("Would you like special characters in your password? yes or no")
  if(!special){
    alert("you need to answer yes or no ")
    special = prompt("Would you like special characters in your password? yes or no");
  }
  else if (special == "yes"){
    return true;
  }
  else{
    return false;
  }
}

let cap = function (){
  cap = prompt("Would you like capital letters in your password? yes or no")
  if(!cap){
    alert("you need to answer yes or no ")
    cap= prompt("Would you like capital letters in your password? yes or no");
  }
  else if (cap == "yes"){
    return true;
  }
  else{
    return false;
  }
};

let lower = function (){
  lower = prompt("Would you like lowercase letters in your password? yes or no")
  if(!lower){
    alert("you need to answer yes or no ")
    lower = prompt("Would you like lowercase letters in your password? yes or no");
  }
  else if (low == "yes"){
    return true;
  }
  else{
    return false;
  }
};

let num =function (){
  num = prompt("Would you like numbers in your password? yes or no")
  if(!num){
    alert("you need to answer yes or no ")
    num = prompt("Would you like numbers in your password? yes or no");
  }
  else if (num == "yes"){
    return true;
  }
  else{
    return false;
  }
};

function getParam(){
  length();
  special();
  cap();
  lower();
  num();
}
// console.log(length());
// console.log(special());
// console.log(cap());
// console.log(lower());
// console.log(num());

// random number generator to chose one of the characters from each of the arrays 



// prompt to ask if we want uppercase 
//prompt to ask if we want lowercase
//prompt to ask if we want numbers 
// prompt to ask if we want special characters 
// prompt dor at least 8 characters and no more than 128 characters


// alert if the length chosen is to long 

//alert if the length chosen is to short 

// alert if requierments are not met

// function to build the password 

// for loop to itterate over the object (if used instead of array )

// pasword to be displayed in the specific spot on the html document

// pasword is able to be selected and copied 
