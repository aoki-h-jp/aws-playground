"""
12. Write a Python class named Student with two instances student1, student2 and
assign given values to the said instances attributes.
Print all the attributes of student1, student2 instances with their values in the given format.
Input values of the instances:
student_1:
student_id = "V12"
student_name = "Ernesto Mendez"
student_2:
student_id = "V12"
marks_language = 85
marks_science = 93
marks_math = 95
Expected Output:
student_id -> V12
student_name -> Ernesto Mendez
student_id -> V12
marks_language -> 85
marks_science -> 93
marks_math -> 95


"""


class Student:
    def __init__(self):
        self.student_id = None

    def set_student_id(self, student_id):
        self.student_id = student_id

    def display_attribute(self):
        for attr, value in self.__dict__.items():
            print(attr, value)


if __name__ == '__main__':
    student1 = Student()
    student1.set_student_id('V12')
    student1.student_name = 'Ernesto Mendez'
    student1.display_attribute()

    student2 = Student()
    student2.set_student_id('V12')
    student2.marks_language = 85
    student2.marks_science = 93
    student2.marks_math = 95
    student2.display_attribute()
