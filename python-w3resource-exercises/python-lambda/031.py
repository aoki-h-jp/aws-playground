"""
31. Write a Python program to extract specified size of strings from a give list of string values using lambda.
Original list:
['Python', 'list', 'exercises', 'practice', 'solution']
length of the string to extract:
8
After extracting strings of specified length from the said list:
['practice', 'solution']
"""
ORIG_LIST = ['Python', 'list', 'exercises', 'practice', 'solution']


if __name__ == '__main__':
    given_len = int(input('Enter length of the string to extract:'))
    print(list(filter(lambda s: len(s) == given_len, ORIG_LIST)))
