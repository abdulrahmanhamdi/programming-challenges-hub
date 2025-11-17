function sumOfDigits(n) {
  return n.toString().split('').reduce((a, b) => a + Number(b), 0);
}
console.log(sumOfDigits(1234));
