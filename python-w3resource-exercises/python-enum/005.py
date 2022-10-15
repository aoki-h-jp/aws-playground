"""
5.Write a Python program to get the unique enumeration values.
Expected Output:
Afghanistan = 93
Albania = 355
Algeria = 213
Andorra = 376
Angola = 244
"""
from enum import Enum


class Country(Enum):
    Afghanistan = 93
    Albania = 355
    Algeria = 213
    Andorra = 376
    Angola = 244
    Antarctica = 672
    # duplicated values
    India = 355
    USA = 213


if __name__ == '__main__':
    for c in Country:
        print(f'{c.name} = {c.value}')
