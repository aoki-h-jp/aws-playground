# Python Enum

## How to execute

```shell
% python 001.py
```

## Summary, Comment
- Pythonでのenum(列挙型)についての演習
- 基本的にはenum.Enumを継承して実装する
- Pythonでこれが必須かどうかはあまりわかっていない (多分そんなに使わない?)
- ここの演習では出てこないがauto()が非常に便利

## Key points

<details>
<summary>001.py - Write a Python program to create an Enum object and display a member name and value.</summary>

- Albaniaは国名なのでクラス名はCountryとする
- nameメソッドで列挙定数名、valueメソッドで値がそれぞれ取得できる
</details>

<details>
<summary>002.py - Write a Python program to iterate over an enum class and display individual member and their value.</summary>

- Enumを継承したクラスはそれ自体がiterable objectになる
- 列挙定数が定義した順にiterateされる
</details>

<details>
<summary>003.py - Write a Python program to display all the member name of an enum class ordered by their values.</summary>

- sortしたいので、Enumのvalueをintにする必要がある
- そのためIntEnumを継承する
</details>

<details>
<summary>004.py - Write a Python program to get all values from an enum class.</summary>

- 内包表記で取得する
</details>

<details>
<summary>005.py - Write a Python program to get the unique enumeration values.</summary>

- Enumのvalueが重複している場合は最も上に定義されたもののみ取り出される
</details>
