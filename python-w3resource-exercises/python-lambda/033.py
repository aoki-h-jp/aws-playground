"""
33. Write a Python program to check whether a given string contains a capital letter,
a lower case letter, a number and a minimum length using lambda.
Input the string: W3resource
['Valid string.']
"""
if __name__ == '__main__':
    given_str = str(input('Enter string:'))
    is_satisfied = \
        lambda s: any(_.islower() for _ in s) and any(_.isupper() for _ in s) and any(_.isdigit() for _ in s) and len(s) > 7
    print(is_satisfied(given_str))
