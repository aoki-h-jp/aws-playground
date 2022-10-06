"""
16. Write a Python program to get the difference between a given number and 17, if the number is greater than 17
return double the absolute difference.
"""


def main():
    given_num = float(input('Enter number:'))
    return abs(given_num - 17) * 2 if given_num > 17 else abs(given_num - 17)


if __name__ == '__main__':
    print(main())
