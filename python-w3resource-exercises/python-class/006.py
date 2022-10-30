"""
6. Write a Python function student_data () which will print the id of a student (student_id).
If the user passes an argument student_name or student_class the function will print the student name and class.
"""


def student_data(student_id, **kwargs):
    print(student_id)
    if 'student_name' in kwargs:
        print(kwargs['student_name'])

    if 'student_name' and 'student_class' in kwargs:
        print(kwargs['student_name'])
        print(kwargs['student_class'])


if __name__ == '__main__':
    student_data('AA', student_name='BB')
    student_data('CC', student_name='DD', student_class='EE')
