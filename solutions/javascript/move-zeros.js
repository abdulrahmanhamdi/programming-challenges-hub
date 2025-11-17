function moveZeros(arr) {
  const nonZero = arr.filter(x => x !== 0);
  const zeros = arr.length - nonZero.length;
  return [...nonZero, ...Array(zeros).fill(0)];
}
console.log(moveZeros([0,1,0,3,12]));
