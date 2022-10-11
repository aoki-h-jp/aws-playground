"""
13. Write a Python program to count the even, odd numbers in a given array of integers using Lambda.
Original arrays:
[1, 2, 3, 5, 7, 8, 9, 10]
Number of even numbers in the above array: 3
Number of odd numbers in the above array: 5
"""
ORIG_LIST = [1, 2, 3, 5, 7, 8, 9, 10]


if __name__ == '__main__':
    print(len(list(filter(lambda x: x % 2 == 0, ORIG_LIST))))
    print(len(list(filter(lambda x: x % 2 != 0, ORIG_LIST))))
