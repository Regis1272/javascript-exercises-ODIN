const reverseString = function(word) {
  let reversed = "";
  for (let i = 0; i < word.length; i++) {
    reversed += word[word.length - 1 - i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
