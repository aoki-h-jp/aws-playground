"""
39. Write a Python program to find the elements of a given list of strings that contain specific substring using lambda.
Original list:
['red', 'black', 'white', 'green', 'orange']
Substring to search:
ack
Elements of the said list that contain specific substring:
['black']
Substring to search:
abc
Elements of the said list that contain specific substring:
[]
"""
ORIG_LIST = ['red', 'black', 'white', 'green', 'orange']

if __name__ == '__main__':
    given_str = str(input('Enter string for substring:'))
    print(list(filter(lambda s: given_str in s, ORIG_LIST)))
