"""
20. Write a Python program to get a string which is n (non-negative integer) copies of a given string.
"""


def main(iter_num: int):
    if iter_num <= 0:
        raise 'Enter non-negative integer.'

    given_str = input('Enter something sentence:')
    return given_str * iter_num


if __name__ == '__main__':
    print(main(3))
