"""
2. Write a Python program to create a function that takes one argument,
and that argument will be multiplied with an unknown given number.
"""
if __name__ == '__main__':
    def mlt_func(n):
        return lambda x: x * n

    dbl = mlt_func(2)
    trp = mlt_func(3)
    qad = mlt_func(4)
    qin = mlt_func(5)

    print(dbl(10))
    print(trp(10))
    print(qad(10))
    print(qin(10))

