"""
21. Write a Python program to find whether a given number (accept from the user) is even or odd,
print out an appropriate message to the user.
"""


def main():
    given_num = int(input('Enter number (integer):'))
    return 'odd' if given_num % 2 != 0 else 'even'


if __name__ == '__main__':
    print(main())
