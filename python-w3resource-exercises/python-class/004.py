"""
4. 'builtins' module provides direct access to all 'built-in' identifiers of Python.
Write a python program which import the abs() function using the builtins module,
display the documentation of abs() function and find the absolute value of -155.
"""
import builtins


if __name__ == '__main__':
    help(builtins.abs)
    print(builtins.abs(-155))
