def second_largest(arr):
    unique = list(set(arr))
    unique.sort()
    return unique[-2]

print(second_largest([10,20,4,45,99]))