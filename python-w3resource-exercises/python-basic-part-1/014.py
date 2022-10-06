"""
14. Write a Python program to calculate number of days between two dates.
Sample dates : (2014, 7, 2), (2014, 7, 11)
Expected output : 9 days
"""
import datetime
START = (2014, 7, 2)
END = (2014, 7, 11)


def main():
    start_date = datetime.date(*START)
    end_date = datetime.date(*END)
    diff = end_date - start_date
    print(f'{diff.days} days')


if __name__ == '__main__':
    main()
