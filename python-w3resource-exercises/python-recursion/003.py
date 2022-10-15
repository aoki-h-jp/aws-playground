"""
3. Write a Python program of recursion list sum.
Test Data: [1, 2, [3,4], [5,6]]
Expected Result: 21
"""
TESTDATA = [1, 2, [3, 4], [5, 6]]


def sum_nested_list(nested_list: list) -> int:
    res = 0
    for elem in nested_list:
        if isinstance(elem, list):
            res += sum_nested_list(elem)
        else:
            res += elem
    return res


if __name__ == '__main__':
    print(sum_nested_list(TESTDATA))
