"""
45. Write a Python program to convert string element to integer inside a given tuple using lambda.
Original tuple values:
(('233', 'ABCD', '33'), ('1416', 'EFGH', '55'), ('2345', 'WERT', '34'))
New tuple values:
((233, 33), (1416, 55), (2345, 34))
"""
ORIG_TUPLE = (('233', 'ABCD', '33'), ('1416', 'EFGH', '55'), ('2345', 'WERT', '34'))


if __name__ == '__main__':
    # PEP 8: E731 do not assign a lambda expression, use a def
    print(tuple([tuple(filter(lambda n: int(n) if n.isdigit() else False, list(subt))) for subt in ORIG_TUPLE]))
