"""
1. Write a Python program to create a lambda function that adds 15 to a given number passed in as an argument,
also create a lambda function that multiplies argument x with argument y and print the result.
"""
if __name__ == '__main__':
    # PEP 8: E731 do not assign a lambda expression, use a def
    add_15 = lambda x: x + 15
    mlt_xy = lambda x, y: x * y

    print(add_15(10))
    print(mlt_xy(10, 20))

