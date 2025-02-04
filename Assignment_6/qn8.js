function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 18));


function rgcd(a, b) {
  return b === 0 ? a : rgcd(b, a % b);
}

console.log(rgcd(12, 18)); 
