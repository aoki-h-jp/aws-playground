"""
1. Write a Python class to convert an integer to a roman numeral.
"""


class Convert:
    @staticmethod
    def int_to_roman(num: int) -> str:
        if num >= 5000 or 0 >= num:
            raise ValueError

        roman = ''
        roman_dic = {
            'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50,
            'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000
        }
        for key, value in reversed(roman_dic.items()):
            if num - value < 0:
                pass
            else:
                roman += key
                num -= value
                while num >= 1000:
                    roman += key
                    num -= value

        return roman


if __name__ == '__main__':
    print(Convert.int_to_roman(1))
    print(Convert.int_to_roman(4000))
