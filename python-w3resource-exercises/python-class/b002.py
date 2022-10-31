"""
2. Write a Python class to convert a roman numeral to an integer.
"""


class Convert:
    @staticmethod
    def roman_to_int(roman: str) -> int:
        roman_dic = {
            'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50,
            'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000
        }
        return \
            sum([roman_dic[i] if roman_dic[i] >= roman_dic[j] else -roman_dic[i] for i, j in zip(roman, roman[1:])]) + \
            roman_dic[roman[-1]]


if __name__ == '__main__':
    print(Convert.roman_to_int('I'))
    print(Convert.roman_to_int('MMMM'))
