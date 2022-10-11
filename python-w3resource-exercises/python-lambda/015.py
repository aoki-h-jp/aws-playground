"""
15. Write a Python program to add two given lists using map and lambda.
Original list:
[1, 2, 3]
[4, 5, 6]
Result: after adding two list
[5, 7, 9]
"""
ORIG_LIST1 = [1, 2, 3]
ORIG_LIST2 = [4, 5, 6]


if __name__ == '__main__':
    print(list(map(lambda x, y: x + y, ORIG_LIST1, ORIG_LIST2)))
