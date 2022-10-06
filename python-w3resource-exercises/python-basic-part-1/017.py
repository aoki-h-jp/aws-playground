"""
17. Write a Python program to test whether a number is within 100 of 1000 or 2000.
"""


def main():
    given_num = float(input('Enter number:'))
    return True if abs(1000 - given_num) <= 100 or abs(2000 - given_num) <= 100 else False


if __name__ == '__main__':
    print(main())
