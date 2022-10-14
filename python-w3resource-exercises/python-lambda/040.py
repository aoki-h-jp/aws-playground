"""
40. Write a Python program to find the nested lists elements, which are present in another list using lambda.
Original lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
[[12, 18, 23, 25, 45], [7, 11, 19, 24, 28], [1, 5, 8, 18, 15, 16]]
Intersection of said nested lists:
[[12], [7, 11], [1, 5, 8]]
"""
ORIG_LIST1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
ORIG_LIST2 = [[12, 18, 23, 25, 45], [7, 11, 19, 24, 28], [1, 5, 8, 18, 15, 16]]


if __name__ == '__main__':
    print([list(filter(lambda x: x in ORIG_LIST1, subl)) for subl in ORIG_LIST2])
