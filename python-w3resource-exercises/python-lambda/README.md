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

<details>
<summary>006.py - Write a Python program to square and cube every number in a given list of integers using Lambda.</summary>

- mapを使う
- 第一引数に適用したい関数、第二引数にiterable objectを指定する
</details>

<details>
<summary>007.py - Write a Python program to find if a given string starts with a given character using Lambda.</summary>

- 題意が曖昧だがここでは「与えられた文字列が'a'から始まるかどうかを判定する」Python programを書くことにした
- ここでもPEP8警告が出るがLambdaを使う指定なので気にしない
- string.startswithで文字列が指定した言葉で始まるかを確認できる
</details>

<details>
<summary>008.py - Write a Python program to extract year, month, date and time using Lambda.</summary>

- 本当はlambdaを使わなくてもdatetime.yearとかで参照した方がスマートだと思う
</details>

<details>
<summary>009.py - Write a Python program to check whether a given string is number or not using Lambda.</summary>

- string.isdigitでその文字列が数値かどうか判別できる
- これもlambda使った方が冗長なので本当はやめた方がいい
</details>

<details>
<summary>010.py - Write a Python program to create Fibonacci series upto n using Lambda.</summary>

- functools.reduceを使う
- reduce(func, iter, initializer)で畳み込み演算が可能
- フィボナッチ数列の漸化式：a_n = a_{n-1}+a_{n-2} (n = 2,3,...), a_0 = 0, a_1 = 1
- range(-1)はエラーにならずlistで出力すると[]が返ってくる
- [1] + [2] = [1, 2]なので、畳み込むとリストの要素がどんどん増える
</details>

<details>
<summary>011.py - Write a Python program to find intersection of two given arrays using Lambda.</summary>

- filterを使う
- filterの引数の関数の判定の結果、Trueになったものだけが出力される
</details>

<details>
<summary>012.py - Write a Python program to rearrange positive and negative numbers in a given array using Lambda.</summary>

- ぱっと見規則性がよくわからないが、出力されているリストの逆数をそれぞれ取ると大きい順に並んでいるのでそのように処理を書く
</details>

<details>
<summary>013.py - Write a Python program to count the even, odd numbers in a given array of integers using Lambda.</summary>

- filterで偶数か奇数かを判定し、その要素数を数える
</details>

<details>
<summary>014.py - Write a Python program to find the values of length six in a given list using Lambda.</summary>

- filterで6文字かどうか判定し、その結果を出力する
</details>

<details>
<summary>015.py - Write a Python program to add two given lists using map and lambda.</summary>

- mapは複数引数が取れる、map(関数, [関数に入れたいiterator object])
</details>
