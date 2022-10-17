"""
5. Write a Python program to find the index position of the largest value smaller than a given number
in a sorted list using Binary Search (bisect).
Expected Output:
Largest value smaller than 5 is at index 3
"""
from bisect import bisect_left
ORIG_LIST = [1, 2, 3, 4, 8, 8, 10, 12]


def largest_insort_pos(nums: list, num: int) -> int:
    pos = bisect_left(nums, num)
    if pos:
        return pos - 1
    else:
        return -1


if __name__ == '__main__':
    print(largest_insort_pos(ORIG_LIST, 5))
