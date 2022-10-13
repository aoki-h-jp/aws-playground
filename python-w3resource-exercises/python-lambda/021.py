"""
21. Write a Python program that multiply each number of given list with a given number using lambda function.
Print the result.
Original list: [2, 4, 6, 9, 11]
Given number: 2
Result:
4 8 12 18 22
"""
ORIG_LIST = [2, 4, 6, 9, 11]
GIVEN_NUM = 2


if __name__ == '__main__':
    print(list(map(lambda x: x * GIVEN_NUM,ORIG_LIST)))
