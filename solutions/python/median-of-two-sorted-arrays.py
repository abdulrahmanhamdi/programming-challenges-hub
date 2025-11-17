def find_median_sorted_arrays(a, b):
    c = sorted(a + b)
    n = len(c)
    if n % 2 == 1:
        return c[n//2]
    return (c[n//2 - 1] + c[n//2]) / 2

print(find_median_sorted_arrays([1,3],[2]))