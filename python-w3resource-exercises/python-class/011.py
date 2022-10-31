"""
11. Write a Python class named Student with two attributes student_id, student_name. Add a new attribute student_class.
Create a function to display the entire attribute and their values in Student class.
"""


class Student:
    def __init__(self):
        self.student_id = None
        self.student_name = None

    def display_attribute(self):
        for attr, value in self.__dict__.items():
            print(attr, value)


if __name__ == '__main__':
    student = Student()
    student.student_class = 'AAA'
    student.display_attribute()
