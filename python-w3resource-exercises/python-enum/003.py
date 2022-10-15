"""
3. Write a Python program to display all the member name of an enum class ordered by their values.
Expected Output:
Country Name ordered by Country Code:
Afghanistan
Algeria
Angola
Albania
Andorra
Antarctica
"""
from enum import IntEnum


class Country(IntEnum):
    Afghanistan = 93
    Albania = 355
    Algeria = 213
    Andorra = 376
    Angola = 244
    Antarctica = 672


if __name__ == '__main__':
    for c in sorted(Country):
        print(c.name)
