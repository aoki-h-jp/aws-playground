"""
3. Write a Python program to insert items into a list in sorted order.
Expected Output:
Original List:
[25, 45, 36, 47, 69, 48, 68, 78, 14, 36]
Sorted List:
[14, 25, 36, 36, 45, 47, 48, 68, 69, 78]
"""
import bisect
ORIG_LIST = [25, 45, 36, 47, 69, 48, 68, 78, 14, 36]
sorted_list = []


if __name__ == '__main__':
    for i in ORIG_LIST:
        bisect.insort(sorted_list, i)

    print(sorted_list)
