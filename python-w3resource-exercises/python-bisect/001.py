"""
1. Write a Python program to locate the left insertion point for a specified value in sorted order.
Expected Output:
4
2
"""
import bisect
ORIG_LIST = [1, 2, 4, 5]


def index(a, x):
    return bisect.bisect_left(a, x)


if __name__ == '__main__':
    print(index(ORIG_LIST, 6))
    print(index(ORIG_LIST, 3))
