function armstrong(n) {
  let digits = n.toString().split('');
  let numDigits = digits.length;
  let sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
  return sum === n;
}

console.log(armstrong(153)); 
console.log(armstrong(9474)); 
console.log(armstrong(123)); 
