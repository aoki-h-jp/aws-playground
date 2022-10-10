# Python Lambda

## How to execute

```shell
% python 001.py
```

## Key points

<details>
<summary>001.py - Write a Python program to create a lambda function that adds 15 to a given number passed in as an argument, also create a lambda function that multiplies argument x with argument y and print the result.</summary>

- 無名関数の書式の通りに書く
- PEP8警告が出るが気にしない
</details>

<details>
<summary>002.py - Write a Python program to create a function that takes one argument, and that argument will be multiplied with an unknown given number.</summary>

- 何倍するかを受け取る関数を作る
</details>

<details>
<summary>003.py - Write a Python program to sort a list of tuples using Lambda.</summary>

- list.sortを使う
- sortの引数 (key)にソートしたい値を指定する
- lambda x: x[1]で配列xの中の2番目の要素を指定するということになる
</details>

<details>
<summary>004.py - Write a Python program to sort a list of dictionaries using Lambda.</summary>

- 辞書の'model'の数値が降順になるようにソートすればいい
- list.sortの引数のreverseをTrueにしておく
</details>

<details>
<summary>005.py - Write a Python program to filter a list of integers using Lambda.</summary>

- filterを使う
- 第一引数にフィルター条件となる関数、第二引数にフィルターしたいiterable objectを指定する
</details>
