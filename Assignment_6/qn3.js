function checkevenodd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkevenodd(4)); 
console.log(checkevenodd(7)); 

function separateEvenOdd(numbers) {
  let evenNumbers = [];
  let oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }

  return { even: evenNumbers, odd: oddNumbers };
}

let result = separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("Even numbers:", result.even); // [2, 4, 6, 8]
console.log("Odd numbers:", result.odd);   // [1, 3, 5, 7, 9]

