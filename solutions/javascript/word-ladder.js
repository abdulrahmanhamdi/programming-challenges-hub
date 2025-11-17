function ladderLength(begin, end, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(end)) return 0;

  const queue = [[begin, 1]];
  while (queue.length) {
    const [word, length] = queue.shift();
    if (word === end) return length;

    for (let i = 0; i < word.length; i++) {
      for (let c of "abcdefghijklmnopqrstuvwxyz") {
        const newWord = word.slice(0, i) + c + word.slice(i+1);
        if (wordSet.has(newWord)) {
          wordSet.delete(newWord);
          queue.push([newWord, length + 1]);
        }
      }
    }
  }
  return 0;
}
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]));
