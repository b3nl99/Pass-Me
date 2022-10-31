// Assignment Code

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

function generatePassword(lower, upper, numbers, symbols, length) { 
  let generatedPassword = '';

  const typesCount = lower + upper + numbers + symbols;

  const typesArr =  [{ lower }, { upper }, { numbers }, { symbols }]. filter
  (
    item => Object.values(item)[0]
  )

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword

}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumbers,
  symbols: getRandomSpCharacter
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpCharacter() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Add event listener to generate button
const resultEl = document.getElementById('password')

generateBtn.addEventListener("click", function writePassword() {
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

  resultEl.textContent = generatePassword(lowercase, uppercase, numbers, spcharacters, length);

});

