function intersect(a, b) {
  const freq = {};
  const result = [];
  for (let x of a) freq[x] = (freq[x] || 0) + 1;
  for (let x of b) {
    if (freq[x] > 0) {
      result.push(x);
      freq[x]--;
    }
  }
  return result;
}
console.log(intersect([1,2,2,1],[2,2]));
