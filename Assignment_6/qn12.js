function removeduplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeduplicates([1, 2, 2, 3, 4, 4, 5])); 

function removeduplicateswithoutset(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeduplicateswithoutset([1, 2, 2, 3, 4, 4, 5])); 

