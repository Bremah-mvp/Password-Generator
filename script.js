// setting values
const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericString = "1234567890";
const specialCharString = `!"#$%&'(\`)*+,-./:;<=>?@[\\]^_{|}~`;

// converting values to arrays
const lowerCaseArray = lowerCaseString.split("");
const upperCaseArray = upperCaseString.split("");
const numericArray = numericString.split("");
const specialCharArray = specialCharString.split("");

// Activating the button
let generateBtn = document.querySelector("#passwordGeneratorButton");

generateBtn.addEventListener('click', genCharArray);

let passwordArray = [];

function genCharArray() {
 
  passwordArray = [];
  if (document.getElementById("charType0").checked) {
    passwordArray = passwordArray.concat(lowerCaseArray);
      }
  if (document.getElementById("charType1").checked) {
    passwordArray = passwordArray.concat(upperCaseArray);
  }
  if (document.getElementById("charType2").checked) {
    passwordArray = passwordArray.concat(numericArray);
  }
  if (document.getElementById("charType3").checked) {
    passwordArray = passwordArray.concat(specialCharArray);
  }
  displayPasswordResults();
}

// Live feedback display for user selected password length.
function genPassLength() {
  passwordLength = document.getElementById("passLength").value;
  document.getElementById("lengthDisplay").innerHTML = " " + passwordLength;
}

// Retrieving the password length.
let passwordLength = document.getElementById("passLength").value;

// initializing display variable.
const passwordEl = document.getElementById("passwordDisplay");

function passwordGenerator() {
  let userPassword = [];
  // This loop will build the password
  for (i = 0; i < passwordLength; i++) {

    let randomIndex = Math.floor(Math.random() * passwordArray.length);
    let passwordChar = passwordArray[randomIndex];

    // add characters to userPassword
    userPassword.push(passwordChar);
  }
  return userPassword.join("");
}

// Display the password
function displayPasswordResults() {
  const password = passwordGenerator();

  // dealing with display of "undefined" when no character set is chosen/
  if (passwordArray.length === 0) {
    passwordEl.classList.add('alert');
    passwordEl.innerHTML = "!- Select at least one character set -!";
    return;
  }

function copyPassword() {
  passwordEl.select();
  document.execCommand("copy");
}

