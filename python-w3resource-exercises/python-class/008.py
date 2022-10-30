"""
8. Write a Python program to crate two empty classes, Student and Marks.
Now create some instances and check whether they are instances of the said classes or not.
Also, check whether the said classes are subclasses of the built-in object class or not.
"""


class Student:
    pass


class Marks:
    pass


if __name__ == '__main__':
    student = Student()
    marks = Marks()
    print(isinstance(student, Student))
    print(isinstance(marks, Student))
    print(isinstance(marks, Marks))
    print(isinstance(student, Marks))
    print(isinstance(Student, object))
    print(isinstance(Marks, object))
