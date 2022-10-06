"""
7. Write a Python program to accept a filename from the user and print the extension of that.
Sample filename : abc.java
Output : java
"""
import os


def main():
    fname = input('Enter filename:')
    print(f'{os.path.basename(fname).split(".")[1]}')


if __name__ == '__main__':
    main()
