"""
34. Write a Python program to filter the height and width of students, which are stored in a dictionary using lambda.
Original Dictionary:
{'Cierra Vega': (6.2, 70), 'Alden Cantrell': (5.9, 65), 'Kierra Gentry': (6.0, 68), 'Pierre Cox': (5.8, 66)}
Height> 6ft and Weight> 70kg:
{'Cierra Vega': (6.2, 70)}
"""
ORIG_DICT = {'Cierra Vega': (6.2, 70), 'Alden Cantrell': (5.9, 65), 'Kierra Gentry': (6.0, 68), 'Pierre Cox': (5.8, 66)}
HEIGHT_THRESHOLD = 6
WEIGHT_THRESHOLD = 70


if __name__ == '__main__':
    print(dict(filter(lambda k: k[1][0] >= HEIGHT_THRESHOLD and k[1][1] >= WEIGHT_THRESHOLD, ORIG_DICT.items())))
