"""
24. Write a Python program to find numbers within a given range where every number is divisible
by every digit it contains.
Enter start number (integer):1
Enter end number (integer):22
Sample Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
"""
if __name__ == '__main__':
    start_num = int(input('Enter start number (integer):'))
    end_num = int(input('Enter end number (integer):'))

    print(
        [
            n for n in range(start_num, end_num + 1) \
            if not any(map(lambda x: int(x) == 0 or n % int(x) != 0, list(str(n))))
        ]
    )
