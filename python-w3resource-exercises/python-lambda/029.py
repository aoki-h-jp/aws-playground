"""
29. Write a Python program to find the maximum value in a given heterogeneous list using lambda.
Original list:
['Python', 3, 2, 4, 5, 'version']
Maximum values in the said list using lambda:
5
"""
ORIG_LIST = ['Python', 3, 2, 4, 5, 'version']


if __name__ == '__main__':
    print(max(ORIG_LIST, key=lambda x: (isinstance(x, int), x)))
