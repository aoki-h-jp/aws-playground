"""
18. Write a Python program to calculate the sum of three given numbers,
if the values are equal then return three times of their sum.
"""


def main():
    given_num1 = float(input('Enter number:'))
    given_num2 = float(input('Enter number:'))
    given_num3 = float(input('Enter number:'))
    return given_num1 * 3 if given_num1 == given_num2 == given_num3 else given_num1 + given_num2 * given_num3


if __name__ == '__main__':
    print(main())
