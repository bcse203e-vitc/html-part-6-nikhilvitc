function decimalToBinary(num) {
  let binary = '';
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary || '0';
}

console.log(decimalToBinary(10)); 

function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

console.log(binaryToDecimal('1010')); // 10

