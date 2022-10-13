"""
25. Write a Python program to create the next bigger number by rearranging the digits of a given number.
Original number: 12
Next bigger number: 21
Original number: 10
Next bigger number: False
Original number: 201
Next bigger number: 210
Original number: 102
Next bigger number: 120
Original number: 445
Next bigger number: 454
"""
from itertools import permutations


if __name__ == '__main__':
    given_num = int(input('Enter number (integer):'))
    rearrange_nums = sorted(set([int(''.join(s)) for s in list(permutations(str(given_num)))]))
    try:
        print(rearrange_nums[rearrange_nums.index(given_num) + 1])
    except IndexError:
        print(False)
