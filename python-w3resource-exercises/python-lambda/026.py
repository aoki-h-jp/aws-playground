"""
26. Write a Python program to find the list with maximum and minimum length using lambda.
Original list:
[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
List with maximum length of lists:
(3, [13, 15, 17])
List with minimum length of lists:
(1, [0])
"""
ORIG_LIST = [[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]


if __name__ == '__main__':
    print((min(map(lambda l: len(l), ORIG_LIST)), min(ORIG_LIST, key=lambda l: len(l))))
    print((max(map(lambda l: len(l), ORIG_LIST)), max(ORIG_LIST, key=lambda l: len(l))))
