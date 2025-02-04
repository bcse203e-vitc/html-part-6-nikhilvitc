function countVowelsConsonants(str) {
  let vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

let result = countVowelsConsonants("JavaScript");
console.log("Vowels:", result.vowels);
console.log("Consonants:", result.consonants);
