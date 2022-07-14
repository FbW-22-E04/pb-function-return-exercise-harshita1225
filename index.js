// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

function checkAge(age) {
  if (age > 18) {
    console.log("you are an adult");
  } else {
    console.log("you are not an adult yet");
  }
}
checkAge(15);
checkAge(55);
checkAge(null);
checkAge(undefined);

console.log("-----------------");
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  const minvalue = Math.min(a, b);
  return minvalue;
}
console.log(min(1, 8));
console.log(min(-9, 8));
console.log("-----------------");

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
  const PowerOf = x ** n;
  return PowerOf;
}
console.log(pow(8, 2));
console.log(pow(10, 10));
