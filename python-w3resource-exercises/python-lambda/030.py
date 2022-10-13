"""
30. Write a Python program to sort a given matrix in ascending order according to the sum of its rows using lambda.
Original Matrix:
[[1, 2, 3], [2, 4, 5], [1, 1, 1]]
Sort the said matrix in ascending order according to the sum of its rows
[[1, 1, 1], [1, 2, 3], [2, 4, 5]]
Original Matrix:
[[1, 2, 3], [-2, 4, -5], [1, -1, 1]]
Sort the said matrix in ascending order according to the sum of its rows
[[-2, 4, -5], [1, -1, 1], [1, 2, 3]]
"""
ORIG_MATRIX1 = [[1, 2, 3], [2, 4, 5], [1, 1, 1]]
ORIG_MATRIX2 = [[1, 2, 3], [-2, 4, -5], [1, -1, 1]]


if __name__ == '__main__':
    print(sorted(ORIG_MATRIX1, key=lambda l: sum(l)))
    print(sorted(ORIG_MATRIX2, key=lambda l: sum(l)))
