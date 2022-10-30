// Assignment Code


const randomFunc = {
  lower: getLower,
  upper: getUpper,
  number: getNumbers,
  symbol: getSpCharacters,
};

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getLower() {
  return random("qwertyuiopasdfghjklzxcvbnm")
}

function getUpper() {
  return random("QWERTYUIOPASDFGHJKLZXCVBNM")
}

function getNumbers() {
  return random(9)
}

function getSpCharacters() {
  return random('!@#$%^&*(){}[]=<>/,.')
}


// Add event listener to generate button
generateBtn.addEventListener("click", function(writePassword){
  var length = prompt("How many characters would you like your password to be?");

  while (length < 8 || length > 128) {
    length = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }

  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("would you like to include numbers?");
  var spcharacters = confirm("would you like to include special characters?");

  while (!(uppercase || lowercase || numbers || spcharacters)) {
    alert("You must select at least one character type!");

    lowercase = confirm("Would you like to include lowercase letters?");
    uppercase = confirm("Would you like to include uppercase letters?");
    numbers = confirm("would you like to include numbers?");
    spcharacters = confirm("would you like to include special characters?");
  }
})

