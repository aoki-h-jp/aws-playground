"""
4. Write a Python program to get all values from an enum class.
Expected output:
[93, 355, 213, 376, 244, 672]
"""
from enum import Enum


class Country(Enum):
    Afghanistan = 93
    Albania = 355
    Algeria = 213
    Andorra = 376
    Angola = 244
    Antarctica = 672


if __name__ == '__main__':
    print([c.value for c in Country])
