def sum_of_digits(n: int) -> int:
    return sum(int(d) for d in str(n))

print(sum_of_digits(1234))