"""
22. Write a Python program that sum the length of the names of a given list of names after removing the names
that starts with an lowercase letter. Use lambda function.
sample_names = ['sally', 'Dylan', 'rebecca', 'Diana', 'Joanne', 'keith']
Result:
16
"""
sample_names = ['sally', 'Dylan', 'rebecca', 'Diana', 'Joanne', 'keith']


if __name__ == '__main__':
    print(len(''.join(list(filter(lambda s: s[0].isupper(), sample_names)))))
