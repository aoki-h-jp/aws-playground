"""
34. Write a Python program to sum of two given integers. However, if the sum is between 15 to 20 it will return 20.
"""


def main():
    num1 = int(input('Enter number(integer):'))
    num2 = int(input('Enter number(integer):'))
    res = num1 + num2
    return 20 if 15 <= res <= 20 else res


if __name__ == '__main__':
    print(main())
