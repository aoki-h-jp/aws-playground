"""
11. Write a Python program to find  the greatest common divisor (gcd) of two integers.
"""


def gcd(n1: int, n2: int) -> int:
    higher = max(n1, n2)
    lower = min(n1, n2)

    if lower == 0:
        return higher
    elif lower == 1:
        return 1
    else:
        return gcd(lower, higher % lower)


if __name__ == '__main__':
    print(gcd(12, 14))
