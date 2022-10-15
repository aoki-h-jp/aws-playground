"""
9. Write a Python program to calculate the geometric sum of n-1.
Note: In mathematics, a geometric series is a series with a constant ratio between successive terms.
"""


def geometric_series_sum(initial: float, ratio: float, n: int) -> float:
    """
    等比数列の和を再帰的に計算する
    :param initial: 初項
    :param ratio: 公比
    :param n: 第n項まで計算
    :return: 等比数列の和
    """
    if n == 0:
        return initial
    return initial*pow(ratio, n) + geometric_series_sum(initial, ratio, n - 1)


if __name__ == '__main__':
    # sum = 1 + 1*2^1 + 1*2^2 + 1*2^3 = 15
    print(geometric_series_sum(1, 2, 3))
