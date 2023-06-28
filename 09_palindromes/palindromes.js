const palindromes = function (string) {
  let flatString = string.toLowerCase();
  let filteredString = "";
  for (letter of flatString) {
    let asciiVal = letter.charCodeAt(0);
    if ((asciiVal >= 48 && asciiVal <= 57) ||
      (asciiVal >= 97 && asciiVal <= 122)) {
      filteredString += letter;
    }
  }
  let reverseString = filteredString.split("").reverse().join("");
  
  if (reverseString === filteredString) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
