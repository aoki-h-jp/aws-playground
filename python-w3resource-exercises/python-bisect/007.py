"""
7. Write a Python program to find three integers
which gives the sum of zero in a given array of integers using Binary Search (bisect).
Expected Output:
[[-40, 0, 40], [-20, -20, 40], [-20, 0, 20]]
[[-6, 1, 5], [-6, 2, 4]]
"""
from itertools import combinations
ORIG_LIST1 = [-20, 0, 20, 40, -20, -40, 80]
ORIG_LIST2 = [1, 2, 3, 4, 5, -6]


def find_sum_zero_triplets(nums: list) -> list:
    """
    :param nums: list of integers
    :return: pair(s) sum is zero
    """
    triplets = []
    # perms = list(permutations(nums, 3))
    # print(perms)
    return triplets


if __name__ == '__main__':
    # 1行で書ける例
    # print([list(perm) for perm in combinations(ORIG_LIST1, 3) if sum(list(perm)) == 0])
    # print([list(perm) for perm in combinations(ORIG_LIST2, 3) if sum(list(perm)) == 0])
    pass
