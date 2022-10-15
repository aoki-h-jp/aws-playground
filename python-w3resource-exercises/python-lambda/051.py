"""
51. Write a Python program to find the maximum and minimum values in a given list of tuples using lambda function.
Original list with tuples:
[('V', 62), ('VI', 68), ('VII', 72), ('VIII', 70), ('IX', 74), ('X', 65)]
Maximum and minimum values of the said list of tuples:
(74, 62)
"""
ORIG_LIST = [('V', 62), ('VI', 68), ('VII', 72), ('VIII', 70), ('IX', 74), ('X', 65)]


if __name__ == '__main__':
    print((min(sorted(ORIG_LIST, key=lambda x: x[1]))[1], max(sorted(ORIG_LIST, key=lambda x: x[1]))[1]))
