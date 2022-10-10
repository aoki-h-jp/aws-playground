"""
33. Write a Python program to sum of three given integers. However, if two values are equal sum will be zero.
"""


def main():
    num1 = int(input('Enter number(integer):'))
    num2 = int(input('Enter number(integer):'))
    num3 = int(input('Enter number(integer):'))
    nums = [num1, num2, num3]
    return 0 if len(nums) - len(set(nums)) == 1 else sum(nums)


if __name__ == '__main__':
    print(main())
