"""
31. Write a Python program to compute the greatest common divisor (GCD) of two positive integers.
"""
from math import gcd


def main():
    num1 = int(input('Enter number(integer):'))
    num2 = int(input('Enter number(integer):'))
    return gcd(num1, num2)


if __name__ == '__main__':
    print(f'GCD: {main()}')
