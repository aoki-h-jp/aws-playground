"""
6. Write a Python program to get the sum of a non-negative integer.
Test Data:
sumDigits(345) -> 12
sumDigits(45) -> 9
"""


def sum_digits(n: int) -> int:
    if 0 <= n <= 9:
        return n
    return int(str(n)[0]) + sum_digits(int(str(n)[1:]))


if __name__ == '__main__':
    print(sum_digits(345))
    print(sum_digits(45))
