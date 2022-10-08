"""
30. Write a Python program that will accept the base and height of a triangle and compute the area.
"""


def main():
    height = float(input('Enter triangle height:'))
    base = float(input('Enter triangle base:'))
    return height * base * 0.5


if __name__ == '__main__':
    print(main())
