"""
42. Write a Python program to calculate the product of a given list of numbers using lambda.
list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Product of the said list numbers:
3628800
list2: [2.2, 4.12, 6.6, 8.1, 8.3]
Product of the said list numbers:
4021.8599520000007
"""
from functools import reduce
ORIG_LIST1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ORIG_LIST2 = [2.2, 4.12, 6.6, 8.1, 8.3]


if __name__ == '__main__':
    print(reduce(lambda x1, x2: x1 * x2, ORIG_LIST1))
    print(reduce(lambda x1, x2: x1 * x2, ORIG_LIST2))
