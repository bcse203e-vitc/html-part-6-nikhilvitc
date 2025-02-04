function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

let largest = findLargest(3, 7, 5);
console.log("The largest number is:", largest);

function findLargestOfN(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

let userNumbers = [3, 7, 12, 5, 9];
let largest = findLargestOfN(userNumbers);
console.log("The largest number is:", largest);

