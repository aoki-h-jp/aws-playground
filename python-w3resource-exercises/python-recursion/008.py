"""
8. Write a Python program to calculate the harmonic sum of n-1.
Note: The harmonic sum is the sum of reciprocals of the positive integers.
"""


def harmonic_sum(n: int) -> float:
    if n == 0:
        return n
    return 1/n + harmonic_sum(n-1)


if __name__ == '__main__':
    print(harmonic_sum(7))
