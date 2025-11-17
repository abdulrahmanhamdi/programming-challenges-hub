def two_sum(nums, target):
    seen = {}
    for i, val in enumerate(nums):
        diff = target - val
        if diff in seen:
            return [seen[diff], i]
        seen[val] = i
    return []

print(two_sum([2,7,11,15], 9))