"""
6. Write a Python program to find the index position of the last occurrence of a given number
in a sorted list using Binary Search (bisect).
Expected Output:
Last occurrence of 8 is present at 5
"""
import bisect
ORIG_LIST = [1, 2, 3, 4, 8, 8, 10, 12]


def last_occurrence(nums: list, num: int) -> int:
    pos = bisect.bisect_right(nums, num)
    if pos != len(nums) + 1 and nums[pos - 1] == num:
        return pos
    else:
        return -1


if __name__ == '__main__':
    print(last_occurrence(ORIG_LIST, 8))
