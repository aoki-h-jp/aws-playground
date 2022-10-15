"""
52. Write a Python program to remove None value from a given list using lambda function.
Original list:
[12, 0, None, 23, None, -55, 234, 89, None, 0, 6, -12]
Remove None value from the said list:
[12, 0, 23, -55, 234, 89, 0, 6, -12]
"""
ORIG_LIST = [12, 0, None, 23, None, -55, 234, 89, None, 0, 6, -12]


if __name__ == '__main__':
    print(list(filter(lambda x: isinstance(x, int), ORIG_LIST)))
