"""
1. Write a Python program to import built-in array module and display the namespace of the said module.
"""
import array


if __name__ == '__main__':
    for name in array.__dict__:
        print(name)
