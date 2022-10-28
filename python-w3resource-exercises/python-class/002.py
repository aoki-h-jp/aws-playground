"""
2. Write a Python program to create a class and display the namespace of the said class.
"""


class Example:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def square(self):
        return self.a * self.b


if __name__ == '__main__':
    for name in Example.__dict__:
        print(name)
