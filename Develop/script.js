// Assignment code here

// Main function called when the button is clicked

function generatePassword() {
  // Prompt for password length
  var length = (prompt("Choose password length (between 8 and 128 characters):"));

  // Validate the entered length
  if (isNaN(length) || length < 8 || length > 128) {
    return alert("Please enter a valid password length between 8 and 128 characters.");
  }

  // Prompt for types of characters to include
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    return alert("Please select at least one character type.");
  }

  // Create a string with all selected characters
  var allChars = '';
  if (includeLowercase) allChars += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) allChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumeric) allChars += '0123456789';
  if (includeSpecial) allChars += '!@#$%^&*()-_=+[]{}|;:\'",.<>/?';

  // Generate the random password
  var password = '';
  for (var i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  // Show the generated password in an alert
  alert("Your secure password: " + password);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
