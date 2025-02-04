function rev(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

console.log(rev(12345)); // 54321
function pal(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}

console.log(pal(12345));  // false
console.log(pal(12321));  // true
