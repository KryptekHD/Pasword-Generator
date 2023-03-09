// Assignment Code
var generateBtn = document.querySelector("#generate");
int max = 3;
int greg = 3;
int maxgreg = max+greg;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
