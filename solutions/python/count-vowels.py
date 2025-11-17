def count_vowels(s: str) -> int:
    vowels = "aeiouAEIOU"
    return sum(1 for ch in s if ch in vowels)

print(count_vowels("apple"))