function charFrequency(s) {
  const freq = {};
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("banana"));
