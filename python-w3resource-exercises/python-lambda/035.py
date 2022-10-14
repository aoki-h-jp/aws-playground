"""
35. Write a Python program to check whether a specified list is sorted or not using lambda.
Original list:
[1, 2, 4, 6, 8, 10, 12, 14, 16, 17]
Is the said list is sorted!
True
Original list:
[1, 2, 4, 6, 8, 10, 12, 14, 16, 17]
Is the said list is sorted!
False
"""
ORIG_LIST1 = [1, 2, 4, 6, 8, 10, 12, 14, 16, 17]
ORIG_LIST2 = [1, 2, 4, 6, 8, 10, 12, 14, 18, 17]


if __name__ == '__main__':
    # PEP 8: E731 do not assign a lambda expression, use a def
    is_sorted = lambda l: sorted(l) == l
    print(is_sorted(ORIG_LIST1))
    print(is_sorted(ORIG_LIST2))
