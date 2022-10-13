"""
27. Write a Python program to sort each sublist of strings in a given list of lists using lambda.
Original list:
[['green', 'orange'], ['black', 'white'], ['white', 'black', 'orange']]
After sorting each sublist of the said list of lists:
[['green', 'orange'], ['black', 'white'], ['black', 'orange', 'white']]
"""
ORIG_LIST = [['green', 'orange'], ['black', 'white'], ['white', 'black', 'orange']]


if __name__ == '__main__':
    print(list(map(lambda l: sorted(l), ORIG_LIST)))
