# Python Recursion

## How to execute

```shell
% python 001.py
```

## Key points

<details>
<summary>001.py - Write a Python program to calculate the sum of a list of numbers.</summary>

- sum(range(10))で普通に求められるが、あえて再帰関数を使う
</details>

<details>
<summary>002.py - Write a Python program to converting an Integer to a string in any base.</summary>

- intをN進数に変換しstringで返す
- 例えば16進数に変換する場合は、16で割った商を再帰関数に入れ、余りは直接stringを参照するようにする
- 再帰関数の戻り値ではstring同士を足していく
</details>

<details>
<summary>003.py - Write a Python program of recursion list sum.</summary>

- このようにNestedなobjectに対して再帰関数は強いので使いたい
</details>

<details>
<summary>004.py - Write a Python program to get the factorial of a non-negative integer.</summary>

- 再帰的に掛け算をする
</details>

<details>
<summary>005.py - Write a Python program to solve the Fibonacci sequence using recursion.</summary>

- フィボナッチ数列のn項目を出力する
- フィボナッチ数列の一般項はa_{n+2} = a_{n+1} + a_{n}, a_0 = 0, a_1 = 1
</details>
