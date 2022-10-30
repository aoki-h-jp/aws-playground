"""
9. Write a Python class named Student with two attributes student_name, marks.
Modify the attribute values of the said class and print the original and modified values of the said attributes.
"""


class Student:
    def __init__(self):
        self.student_name = None
        self.marks = None


if __name__ == '__main__':
    student = Student()
    print(getattr(student, 'student_name'))
    print(getattr(student, 'marks'))
    setattr(student, 'student_name', 'AAA')
    setattr(student, 'marks', 'BBB')
    print(getattr(student, 'student_name'))
    print(getattr(student, 'marks'))
