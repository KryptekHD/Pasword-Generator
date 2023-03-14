// Assignment Code
//the button has this class on it 
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// pasword to be displayed in the specific spot on the html document
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

 

function generatePassword(){
  used()
  generator(newArr);
  return passwordGen.join('');
  
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//an array with all uppercase letters 
 let uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// an array with all lowere case  letters
let lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// an array with numbers 
let number = [0,1,2,3,4,5,6,7,8,9];

//an array with special characters 
let specialChar =["!","@","#","$","%","^","&","*"];

// a new array with the created pasword 
let passwordGen =[];



// a variable that will determin the length of the password (prompt)
// has to be linked to the button create pasword 
// prompt to ask if we want uppercase 
//prompt to ask if we want lowercase
//prompt to ask if we want numbers 
// prompt to ask if we want special characters 
// prompt dor at least 8 characters and no more than 128 characters
// alert if the length chosen is to long 
//alert if the length chosen is to short 
// alert if requierments are not met

let length = 0;
function len(){
  length = prompt("How long would you like your pasword to be ?" );
    if(length < 8 || !length || length > 128){
      alert("This password length is to short of a length the minimum is 8 characters and the maximum is 128 chracters Try Again")
      generatePassword();
    }
}

let special;
function spec(){
  special= prompt("Would you like special characters in your password? yes or no")
  if(!special){
    alert("you need to answer yes or no ")
    special = prompt("Would you like special characters in your password? yes or no");
  }
  else if (special === "yes"){
    return special= true;
  }
  else{
    return special = false;
  }
}

let cap;
function capt (){
  cap = prompt("Would you like capital letters in your password? yes or no")
  if(!cap){
    alert("you need to answer yes or no ")
    cap= prompt("Would you like capital letters in your password? yes or no");
  }
  else if (cap === "yes"){
    return cap = true;
  }
  else{
    return cap = false;
  }
};

let lower;
function lowe(){
  lower = prompt("Would you like lowercase letters in your password? yes or no")
  if(!lower){
    alert("you need to answer yes or no ")
    lower = prompt("Would you like lowercase letters in your password? yes or no");
  }
  else if (lower === "yes"){
    return lower = true;
  }
  else{
    return lower = false;
  }
};

let num;
function nums(){
  num = prompt("Would you like numbers in your password? yes or no")
  if(!num){
    alert("you need to answer yes or no ")
    num = prompt("Would you like numbers in your password? yes or no");
  }
  else if (num === "yes"){
    return num = true;
  }
  else{
    return num = false;
  }
};

function getParam(){
  len();
  spec();
  capt();
  lowe();
  nums();
}

// random number generator to chose one of the characters from each of the arrays 

function randomNumber(arr){
  return Math.floor(Math.random () * arr.length)
}


// function to let the generator know what arrays to use 


let newArr = [];

function used (){
  getParam();
  
  if(special === true){
   let arr = newArr.concat(specialChar);
   newArr =arr;
  }
  if(cap === true){
   let arr1 = newArr.concat(uppercase);
   newArr = arr1;
  }
  if(lower === true){
    let arr2 = newArr.concat(lowercase);
    newArr = arr2;
  }
  if(num === true){
    let arr3 = newArr.concat(number);
    newArr = arr3;
  }
  return newArr;
}

function generator(arr){
  for( let i =0; i<length; i++){
    passwordGen.push(arr[randomNumber(newArr)])
  }
  return passwordGen;
}
// pasword is able to be selected and copied 
