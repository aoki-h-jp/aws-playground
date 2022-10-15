"""
10. Write a Python program to calculate the value of 'a' to the power 'b'.
Test Data:
(power(3,4) -> 81
"""


def power(base: int, exp: int) -> int:
    if exp == 1:
        return base
    return base * power(base, exp - 1)


if __name__ == '__main__':
    print(power(3, 4))

