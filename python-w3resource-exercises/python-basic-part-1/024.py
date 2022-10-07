"""
24. Write a Python program to test whether a passed letter is a vowel or not.
"""


def main():
    given_ltr = input('Enter something letter:')
    return 'vowel' if given_ltr in 'aiueo' else 'not vowel'


if __name__ == '__main__':
    print(main())
