"""
6. Write a Python program which accepts a sequence of comma-separated numbers from user and
generate a list and a tuple with those numbers.
Sample data : 3, 5, 7, 23
Output :
List : ['3', ' 5', ' 7', ' 23']
Tuple : ('3', ' 5', ' 7', ' 23')
"""


def main():
    comma_numbers = input('Enter comma-separated numbers:')
    print(f'List: {list(comma_numbers.split(","))}')
    print(f'Tuple: {tuple(comma_numbers.split(","))}')


if __name__ == '__main__':
    main()
