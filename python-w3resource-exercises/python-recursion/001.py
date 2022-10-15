"""
1. Write a Python program to calculate the sum of a list of numbers.
"""


def list_sum(num_list: list) -> int:
    if len(num_list) == 1:
        return num_list[0]
    else:
        return num_list[0] + list_sum(num_list[1:])


if __name__ == '__main__':
    print(list_sum([2, 0, 5, 6, 7]))
