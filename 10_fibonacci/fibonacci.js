const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  if (typeof num === "string") num = Number(num);

  let fib = [];

  for (let i = 0; i < num; i++) {
    if (i <= 1) {
      fib.push(1);
      continue;
    }
    fib.push(fib[i-1] + fib[i-2]);
  }
  
  return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
