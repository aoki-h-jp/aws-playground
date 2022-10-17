"""
2. Write a Python program to locate the right insertion point for a specified value in sorted order.
Expected Output:
3
2
"""
import bisect
ORIG_LIST = [1, 2, 4, 7]


def index(a, x):
    return bisect.bisect_right(a, x)


if __name__ == '__main__':
    print(index(ORIG_LIST, 6))
    print(index(ORIG_LIST, 3))
