"""
4. Write a Python program which accepts the radius of a circle from the user and compute the area.
"""
import math


def main():
    radius = float(input('Enter radius of circle:'))
    print(f'The area of circle: {math.pi*pow(radius, 2)}')


if __name__ == '__main__':
    main()
