"""
4. Write a Python program to find the first occurrence of a given number in a sorted list using Binary Search (bisect).
Expected Output:
First occurrence of 8 is present at index 4
"""
import bisect
ORIG_LIST = [1, 2, 3, 4, 8, 8, 10, 12]


def first_occurrence(nums: list, num: int) -> int:
    pos = bisect.bisect_left(nums, num)
    if pos != len(nums) and nums[pos] == num:
        return pos
    else:
        return -1


if __name__ == '__main__':
    print(first_occurrence(ORIG_LIST, 8))
