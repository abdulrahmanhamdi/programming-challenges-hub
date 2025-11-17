from collections import deque

def ladder_length(begin, end, wordList):
    wordSet=set(wordList)
    if end not in wordSet: return 0
    queue=deque([(begin,1)])
    while queue:
        word,length=queue.popleft()
        if word==end: return length
        for i in range(len(word)):
            for c in "abcdefghijklmnopqrstuvwxyz":
                new_word=word[:i]+c+word[i+1:]
                if new_word in wordSet:
                    wordSet.remove(new_word)
                    queue.append((new_word,length+1))
    return 0

print(ladder_length("hit","cog",["hot","dot","dog","lot","log","cog"]))