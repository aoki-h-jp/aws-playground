"""
18. Write a Python program to find palindromes in a given list of strings using Lambda.
Orginal list of strings:
['php', 'w3r', 'Python', 'abcd', 'Java', 'aaa']
List of palindromes:
['php', 'aaa']
"""
ORIG_LIST = ['php', 'w3r', 'Python', 'abcd', 'Java', 'aaa']


if __name__ == '__main__':
    print(list(filter(lambda s: s == s[::-1], ORIG_LIST)))
