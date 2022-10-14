"""
32. Write a Python program to count float number in a given mixed list using lambda.
Original list:
[1, 'abcd', 3.12, 1.2, 4, 'xyz', 5, 'pqr', 7, -5, -12.22]
Number of floats in the said mixed list:
3
"""
ORIG_LIST = [1, 'abcd', 3.12, 1.2, 4, 'xyz', 5, 'pqr', 7, -5, -12.22]


if __name__ == '__main__':
    print(len(list(filter(lambda x: isinstance(x, float), ORIG_LIST))))
