# Python Class

## How to execute

```shell
% python 001.py
```

## Key points

<details>
<summary>001.py - Write a Python program to import built-in array module and display the namespace of the said module.</summary>

- __dict__でオブジェクトのプロパティを取得できる
</details>

<details>
<summary>002.py - Write a Python program to create a class and display the namespace of the said class.</summary>

- 何かクラスを適当に作って、それを__dict__で参照する
</details>

<details>
<summary>003.py - Write a Python program to create an instance of a specified class and display the namespace of the said instance.</summary>

- 002と同様に適当にクラスを作って、__dict__で参照する
</details>

<details>
<summary>004.py - 'builtins' module provides direct access to all 'built-in' identifiers of Python. Write a python program which import the abs() function using the builtins module, display the documentation of abs() function and find the absolute value of -155.</summary>

- abs()でも呼べるが、builtins.absでも呼べる
- help()でドキュメントを参照できる
</details>

<details>
<summary>005.py - Define a Python function student(). Using function attributes display the names of all arguments.</summary>

- 受け取った引数を全てそのまま返す関数を作ればいい
</details>
