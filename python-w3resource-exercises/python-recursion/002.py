"""
2. Write a Python program to converting an Integer to a string in any base.
"""


def convert_base(n: int, base: int) -> str:
    strings = "0123456789ABCDEF"
    if n < base:
        return strings[n]
    else:
        return convert_base(n // base, base) + strings[n % base]


if __name__ == '__main__':
    print(convert_base(100, 16))
