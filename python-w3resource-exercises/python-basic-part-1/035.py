"""
35. Write a Python program that will return true
if the two given integer values are equal or their sum or difference is 5.
"""


def main():
    num1 = int(input('Enter number(integer):'))
    num2 = int(input('Enter number(integer):'))
    return True if num1 == num2 or abs(num1 - num2) == 5 or num1 + num2 == 5 else False


if __name__ == '__main__':
    print(main())
