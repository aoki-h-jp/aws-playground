"""
43. Write a Python program to multiply all the numbers in a given list using lambda.
Original list:
[4, 3, 2, 2, -1, 18]
Mmultiply all the numbers of the said list: -864
Original list:
[2, 4, 8, 8, 3, 2, 9]
Mmultiply all the numbers of the said list: 27648
"""
from functools import reduce
ORIG_LIST1 = [4, 3, 2, 2, -1, 18]
ORIG_LIST2 = [2, 4, 8, 8, 3, 2, 9]


if __name__ == '__main__':
    print(reduce(lambda x1, x2: x1 * x2, ORIG_LIST1))
    print(reduce(lambda x1, x2: x1 * x2, ORIG_LIST2))
