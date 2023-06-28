const removeFromArray = function(array, ...args) {
  // A much less eloquent solution, to be sure...
  let filteredArray = array;
  array.forEach(element => {
    for (let arg of args) {
      filteredArray = filteredArray.filter(word => word !== arg);
    }
  });
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
