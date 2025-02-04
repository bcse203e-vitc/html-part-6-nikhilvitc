function secondsmallestlargest(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return {
    secondSmallest: sortedArr[1],
    secondLargest: sortedArr[sortedArr.length - 2]
  };
}

let result = secondsmallestlargest([4, 2, 9, 1, 5, 6]);
console.log("Second Smallest:", result.secondSmallest); 
console.log("Second Largest:", result.secondLargest); 
