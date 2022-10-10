"""
3. Write a Python program to sort a list of tuples using Lambda.
Original list of tuples:
[('English', 88), ('Science', 90), ('Maths', 97), ('Social sciences', 82)]
Sorting the List of Tuples:
[('Social sciences', 82), ('English', 88), ('Science', 90), ('Maths', 97)]
"""
ORIG_LIST = [('English', 88), ('Science', 90), ('Maths', 97), ('Social sciences', 82)]

if __name__ == '__main__':
    ORIG_LIST.sort(key=lambda x: x[1])
    print(ORIG_LIST)
