function foo(x) {
  if (x === null) {
    return 0; // Explicit handling of null
  } else if (x === undefined) {
    return -1; // Explicit handling of undefined.  This could also throw an error.
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1