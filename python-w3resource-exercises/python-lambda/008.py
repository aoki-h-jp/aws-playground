"""
8. Write a Python program to extract year, month, date and time using Lambda.
Sample Output:
2020-01-15 09:03:32.744178
2020
1
15
09:03:32.744178
"""
import datetime
SAMPLE_DATETIME = datetime.datetime(2020, 1, 15, 9, 3, 32, 744178)


if __name__ == '__main__':
    # PEP 8: E731 do not assign a lambda expression, use a def
    year = lambda x: x.year
    month = lambda x: x.month
    day = lambda x: x.day
    t = lambda x: x.time()

    print(year(SAMPLE_DATETIME))
    print(month(SAMPLE_DATETIME))
    print(day(SAMPLE_DATETIME))
    print(t(SAMPLE_DATETIME))
