"""
3. Write a Python class to find validity of a string of parentheses, '(', ')', '{', '}', '[' and '].
These brackets must be close in the correct order,
for example "()" and "()[]{}" are valid but "[)", "({[)]" and "{{{" are invalid.
"""


class FindValidity:
    @staticmethod
    def parentheses(string: str) -> bool:
        char = {'(': ')', '{': '}', '[': ']'}
        while len(string) != 0:
            if string[1] == char[string[0]]:
                string = string.replace(string[0], '', 1)
                string = string.replace(string[0], '', 1)
            else:
                return False

        return True


if __name__ == '__main__':
    print(FindValidity.parentheses("()"))
    print(FindValidity.parentheses("()[]{}"))
    print(FindValidity.parentheses("[)"))
    print(FindValidity.parentheses("({[)]"))
    print(FindValidity.parentheses("{{{"))
