"""
19. Write a Python program to get a new string from a given string where "Is" has been added to the front.
If the given string already begins with "Is" then return the string unchanged.
"""


def main():
    given_str = input('Enter something sentence:')
    return given_str if len(given_str) >= 2 and 'Is' == given_str[:2] else 'Is' + given_str


if __name__ == '__main__':
    print(main())
