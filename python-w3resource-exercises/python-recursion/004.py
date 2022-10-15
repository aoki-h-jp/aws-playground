"""
4. Write a Python program to get the factorial of a non-negative integer.
"""


def factorial(n: int) -> int:
    if n == 1:
        return n
    return n * factorial(n-1)


if __name__ == '__main__':
    print(factorial(6))
