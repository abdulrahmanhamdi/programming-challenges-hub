def move_zeros(arr):
    result = [x for x in arr if x != 0]
    zeros = arr.count(0)
    return result + [0] * zeros

print(move_zeros([0,1,0,3,12]))