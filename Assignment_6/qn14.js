function pangram(sentence) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  sentence = sentence.toLowerCase();
  for (let char of alphabet) {
    if (!sentence.includes(char)) {
      return "❌ It is not a pangram.";
    }
  }
  return "✅ It is a pangram.";
}

console.log(pangram("The quick brown fox jumps over the lazy dog")); 
