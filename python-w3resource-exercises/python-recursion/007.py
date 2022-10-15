"""
7. Write a Python program to calculate the sum of the positive integers of n+(n-2)+(n-4)... (until n-x =< 0).
Test Data:
sum_series(6) -> 12
sum_series(10) -> 30
"""


def sum_series(n: int) -> int:
    if n <= 1:
        return n
    return n + sum_series(n - 2)


if __name__ == '__main__':
    print(sum_series(6))
    print(sum_series(10))
