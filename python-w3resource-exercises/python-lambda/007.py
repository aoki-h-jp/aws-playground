"""
7. Write a Python program to find if a given string starts with a given character using Lambda.
"""
if __name__ == '__main__':
    # PEP 8: E731 do not assign a lambda expression, use a def
    starts_with = lambda s: True if s.startswith('a') else False
    print(starts_with('aaaa'))
    print(starts_with('bbbb'))
