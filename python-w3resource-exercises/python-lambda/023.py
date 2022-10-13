"""
23. Write a Python program to calculate the sum of the positive and negative numbers of a given list of numbers
using lambda function.
Original list: [2, 4, -6, -9, 11, -12, 14, -5, 17]
Sum of the positive numbers: -32
Sum of the negative numbers: 48
"""
ORIG_LIST = [2, 4, -6, -9, 11, -12, 14, -5, 17]


if __name__ == '__main__':
    print(sum(list(filter(lambda x: x < 0, ORIG_LIST))))
    print(sum(list(filter(lambda x: x >= 0, ORIG_LIST))))


