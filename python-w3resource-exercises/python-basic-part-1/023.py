"""
23. Write a Python program to get the n (non-negative integer) copies of the first 2 characters of a given string.
Return the n copies of the whole string if the length is less than 2.
"""


def main(iter_num: int):
    if iter_num <= 0:
        raise 'Enter non-negative integer.'

    given_str = input('Enter something sentence:')
    return given_str[:2]*iter_num if len(given_str) >= 2 else given_str*iter_num


if __name__ == '__main__':
    print(main(5))
