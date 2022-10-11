"""
14. Write a Python program to find the values of length six in a given list using Lambda.
Sample Output:
Monday
Friday
Sunday
"""
WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

if __name__ == '__main__':
    for d in filter(lambda day: len(day) == 6, WEEKDAYS):
        print(d)
