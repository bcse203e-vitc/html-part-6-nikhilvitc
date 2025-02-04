function fib(n) {
  let result = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}

console.log(fib(7));

function recFib(n) {
  if (n <= 1) return n;
  return recFib(n - 1) + recFib(n - 2);
}

function generateFib(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(recFib(i));
  }
  return result;
}

console.log(generateFib(7)); 

