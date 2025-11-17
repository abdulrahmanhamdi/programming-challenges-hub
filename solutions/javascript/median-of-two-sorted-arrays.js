function findMedianSortedArrays(a, b) {
  const c = [...a, ...b].sort((x, y) => x - y);
  const n = c.length;
  return n % 2 ? c[Math.floor(n/2)] : (c[n/2 - 1] + c[n/2]) / 2;
}
console.log(findMedianSortedArrays([1,3],[2]));
