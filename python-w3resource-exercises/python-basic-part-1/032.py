"""
32. Write a Python program to get the least common multiple (LCM) of two positive integers.
"""
from math import lcm


def main():
    num1 = int(input('Enter number(integer):'))
    num2 = int(input('Enter number(integer):'))
    return lcm(num1, num2)


if __name__ == '__main__':
    print(f'LCM: {main()}')
