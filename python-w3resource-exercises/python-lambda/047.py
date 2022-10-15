"""
47. Write a Python program to sort a given mixed list of integers and strings using lambda.
Numbers must be sorted before strings.
Original list:
[19, 'red', 12, 'green', 'blue', 10, 'white', 'green', 1]
Sort the said mixed list of integers and strings:
[1, 10, 12, 19, 'blue', 'green', 'green', 'red', 'white']
"""
ORIG_LIST = [19, 'red', 12, 'green', 'blue', 10, 'white', 'green', 1]


if __name__ == '__main__':
    print(list(sorted(ORIG_LIST, key=lambda x: (isinstance(x, str), x))))


