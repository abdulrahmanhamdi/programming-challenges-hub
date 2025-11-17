function countVowels(s) {
  const vowels = "aeiouAEIOU";
  return [...s].filter(ch => vowels.includes(ch)).length;
}
console.log(countVowels("apple"));
