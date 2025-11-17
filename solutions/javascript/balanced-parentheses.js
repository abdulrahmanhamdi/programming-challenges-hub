function isBalanced(s) {
  const stack = [];
  const pairs = { ')':'(', ']':'[', '}':'{' };
  for (let ch of s) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (")]}".includes(ch)) {
      if (!stack.length || stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isBalanced("()[{}]"));
