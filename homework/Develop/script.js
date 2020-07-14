var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Variables
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', "'", '=', '<', '>', '/', ',', '.', '`'];

// Generate Password
function generatePassword() {

  var passwordLength = prompt('Password must be between 8 and 128 characters. Please choose a number between 8 and 128.');

  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters.');
    return;
  } else {
    var confirmLowerCase = confirm("Do you want lowercase letters?");
    var confirmUpperCase = confirm("Do you want uppercase letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecial = confirm("Do you want special characters?");

    if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecial) {
      alert('You must select at least one criteria. Please try again');
    } else {
      var allChar = [];
      if (confirmLowerCase) allChar = allChar.concat(lowerCase);
      if (confirmUpperCase) allChar = allChar.concat(upperCase);
      if (confirmNumbers) allChar = allChar.concat(numbers);
      if (confirmSpecial) allChar = allChar.concat(special);

      var password = "";
      for (var i = 1; i <= passwordLength; i++) {
        var randomChar = allChar[Math.floor(Math.random() * allChar.length)]
        password = password + randomChar
      }
      return password;
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);