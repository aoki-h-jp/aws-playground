# Python Recursion

## How to execute

```shell
% python 001.py
```

## Summary, Comment
- 再帰関数についての演習
- ネストされたオブジェクトに対しての処理には強い
- 一方で終了条件を記さないといけない場合がほとんどなので素直に処理を書いた方がいい場合が多い

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

<details>
<summary>006.py - Write a Python program to get the sum of a non-negative integer.</summary>

- 受け取った数値をstrに変換してiterateすれば同じことはできるが、再帰関数を使う
</details>

<details>
<summary>007.py - Write a Python program to calculate the sum of the positive integers of n+(n-2)+(n-4)... (until n-x =< 0).</summary>

- この題意だと再帰関数を使いたくなる
</details>

<details>
<summary>008.py - Write a Python program to calculate the harmonic sum of n-1.</summary>

- 逆数和を再帰的に計算する
</details>

<details>
<summary>009.py - Write a Python program to calculate the geometric sum of n-1.</summary>

- 等比数列の和を計算する
- 初項と公比を与える必要がある
- 等比数列の和の公式があるので、それをストレートに書きたいがここでは再帰的に計算する
</details>

<details>
<summary>010.py - Write a Python program to calculate the value of 'a' to the power 'b'.</summary>

- powというbuilt-in methodがあるが、ここでは再帰的に計算する
</details>

<details>
<summary>011.py - Write a Python program to find  the greatest common divisor (gcd) of two integers.</summary>

- 最大公約数を再帰的に計算する
</details>
