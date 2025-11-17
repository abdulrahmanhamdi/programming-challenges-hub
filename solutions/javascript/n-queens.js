function solveNQueens(n) {
  const result = [];
  const board = Array.from({length:n}, () => Array(n).fill('.'));
  const cols = new Set(), d1 = new Set(), d2 = new Set();

  function backtrack(r) {
    if (r === n) {
      result.push(board.map(row => row.join("")));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || d1.has(r-c) || d2.has(r+c)) continue;
      board[r][c] = 'Q'; cols.add(c); d1.add(r-c); d2.add(r+c);
      backtrack(r+1);
      board[r][c] = '.'; cols.delete(c); d1.delete(r-c); d2.delete(r+c);
    }
  }
  backtrack(0);
  return result;
}
console.log(solveNQueens(4).length);
