"""
19. Write a Python program to find all anagrams of a string in a given list of strings using lambda.
Orginal list of strings:
['bcda', 'abce', 'cbda', 'cbea', 'adcb']
Anagrams of 'abcd' in the above string:
['bcda', 'cbda', 'adcb']
"""
ORIG_LIST = ['bcda', 'abce', 'cbda', 'cbea', 'adcb']


if __name__ == '__main__':
    print(list(filter(lambda s: 'abcd' == ''.join(sorted(s)), ORIG_LIST)))
