"""
10. Write a Python program that accepts an integer (n) and computes the value of n+nn+nnn.
Sample value of n is 5
Expected Result : 615
"""


def main():
    base_num = int(input('Enter an integer number:'))
    base_num2 = int('%i%i' % (base_num, base_num))
    base_num3 = int('%i%i%i' % (base_num, base_num, base_num))
    print(base_num + base_num2 + base_num3)


if __name__ == '__main__':
    main()
