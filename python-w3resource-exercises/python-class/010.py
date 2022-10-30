"""
10. Write a Python class named Student with two attributes student_id, student_name.
Add a new attribute student_class and display the entire attribute and their values of the said class.
Now remove the student_name attribute and display the entire attribute with values.
"""


class Student:
    def __init__(self):
        self.student_id = None
        self.student_name = None


if __name__ == '__main__':
    student = Student()
    student.student_class = 'A'
    for attr, value in student.__dict__.items():
        print(attr, value)

    del student.student_name
    for attr, value in student.__dict__.items():
        print(attr, value)
