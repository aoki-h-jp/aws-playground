"""
3. Write a Python program to create an instance of a specified class and display the namespace of the said instance.
"""


class Example:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def square(self):
        return self.a * self.b


if __name__ == '__main__':
    example = Example(2, 3)
    print(example.__dict__)
