"""
11. Write a Python program to find intersection of two given arrays using Lambda.
Original arrays:
[1, 2, 3, 5, 7, 8, 9, 10]
[1, 2, 4, 8, 9]
Intersection of the said arrays: [1, 2, 8, 9]
"""
ORIG_LIST1 = [1, 2, 3, 5, 7, 8, 9, 10]
ORIG_LIST2 = [1, 2, 4, 8, 9]


if __name__ == '__main__':
    print(list(filter(lambda x: x in ORIG_LIST1, ORIG_LIST2)))
