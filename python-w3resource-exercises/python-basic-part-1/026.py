"""
26. Write a Python program to create a histogram from a given list of integers.
"""
import matplotlib.pyplot as plt
GIVEN_LIST = [2, 3, 4, 5, 6, 1, 2, 3, 4, 2, 4, 2, 3, 5, 6]


def main():
    plt.hist(GIVEN_LIST)
    plt.savefig('026.png')
    plt.close()


if __name__ == '__main__':
    main()
