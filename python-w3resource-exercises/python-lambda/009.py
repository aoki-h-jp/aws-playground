"""
9. Write a Python program to check whether a given string is number or not using Lambda.
"""
if __name__ == '__main__':
    is_number = lambda s: s.isdigit()
    print(is_number('3'))
    print(is_number('A'))
