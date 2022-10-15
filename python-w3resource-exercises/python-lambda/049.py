"""
49. Write a Python program to count the occurrences of the items in a given list using lambda.
Original list:
[3, 4, 5, 8, 0, 3, 8, 5, 0, 3, 1, 5, 2, 3, 4, 2]
Count the occurrences of the items in the said list:
{3: 4, 4: 2, 5: 3, 8: 2, 0: 2, 1: 1, 2: 2}
"""
ORIG_LIST = [3, 4, 5, 8, 0, 3, 8, 5, 0, 3, 1, 5, 2, 3, 4, 2]


if __name__ == '__main__':
    print(dict(map(lambda n: (n, list(ORIG_LIST).count(n)), ORIG_LIST)))
