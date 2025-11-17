def intersect(a, b):
    freq = {}
    result = []
    for x in a:
        freq[x] = freq.get(x, 0) + 1
    for x in b:
        if x in freq and freq[x] > 0:
            result.append(x)
            freq[x] -= 1
    return result

print(intersect([1,2,2,1],[2,2]))