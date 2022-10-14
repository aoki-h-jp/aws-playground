"""
41. Write a Python program to reverse strings in a given list of string values using lambda.
Original lists:
['Red', 'Green', 'Blue', 'White', 'Black']
Reverse strings of the said given list:
['deR', 'neerG', 'eulB', 'etihW', 'kcalB']
"""
ORIG_LIST = ['Red', 'Green', 'Blue', 'White', 'Black']


if __name__ == '__main__':
    print(list(map(lambda s: s[::-1], ORIG_LIST)))
