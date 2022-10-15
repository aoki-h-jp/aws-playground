"""
1. Write a Python program to create an Enum object and display a member name and value.
Sample data :
Member name: Albania
Member value: 355
"""
from enum import Enum


class Country(Enum):
    Albania = 355


if __name__ == '__main__':
    print(Country.Albania.name)
    print(Country.Albania.value)
