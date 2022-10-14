# Python Lambda

## How to execute

```shell
% python 001.py
```

## Summary, Comment
- 無名関数、高階関数についての演習
- lambda, map, filter, reduceを扱う
- Pythonでは可読性を上げることや関数型プログラミングを避けたい傾向があるため、高階関数よりリスト内包表記などを用いた方がbetter
- 例えば畳み込み演算を行うreduceはsumなどで代用できるしそちらの方が可読性が良いのでfunctoolsに格下げされている
- 一方でsortのkey引数などにはlambdaはよく使われるので、適所で使用できた方も良い

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

<details>
<summary>016.py - Write a Python program to find the second lowest grade of any student(s) from the given names and grades of each student using lists and lambda. Input number of students, names and grades of each student.</summary>

- 生徒の名前とGradeを入れてから動かすのが題意っぽいが、ここでは生徒は固定として考える（追加したい場合はlistにappendすればいい）
- 題意からgradeがthe lowestなのが1なのか3なのかわからないが1がlowestと考えることにする
</details>

<details>
<summary>017.py - Write a Python program to find numbers divisible by nineteen or thirteen from a list of numbers using Lambda.</summary>

- filterを使って抽出する
</details>

<details>
<summary>018.py - Write a Python program to find palindromes in a given list of strings using Lambda.</summary>

- palindromes「回文」
- reverseしたものと一致すればOK
- string[::-1]で''.join(list(reversed(string)))と同じ結果が得られる
</details>

<details>
<summary>019.py - Write a Python program to find all anagrams of a string in a given list of strings using lambda.</summary>

- anagrams「単語に含まれる文字の順序を変えて、別の意味の単語を作る遊び」
- ソートして一緒になればOK
</details>

<details>
<summary>020.py - Write a Python program to find the numbers of a given string and store them in a list, display the numbers which are bigger than the length of the list in sorted form. Use lambda function to solve the problem.</summary>

- filterを使って抽出する
</details>

<details>
<summary>021.py - Write a Python program that multiply each number of given list with a given number using lambda function. Print the result.</summary>

- mapを使う
</details>

<details>
<summary>022.py - Write a Python program that sum the length of the names of a given list of names after removing the names that starts with an lowercase letter. Use lambda function.</summary>

- filterでuppercaseから始まってるかどうかをみる (string.isupperが使える)
- 1行で書けるが、可読性が良くないので本当はやめた方が良さそう
</details>

<details>
<summary>023.py - Write a Python program to calculate the sum of the positive and negative numbers of a given list of numbers using lambda function.</summary>

- filterを使って抽出する
- sum(list)で総和が取れる
</details>

<details>
<summary>024.py - Write a Python program to find numbers within a given range where every number is divisible by every digit it contains.</summary>

- 例えば12だったら12が1か2で割れるかどうか(これは割れる)、13だったら1か3で割れるかどうか(3で割れない)みたいなことを調べればいい
- 0では割れないので条件が1個でも成り立たなかったらリストに追加しないという処理にする
- anyを使って判定する
</details>

<details>
<summary>025.py - Write a Python program to create the next bigger number by rearranging the digits of a given number.</summary>

- itertools.permutationを使って列挙し、その中から探す
- このやり方は数値が数十桁になったりするとスケーラビリティに問題がありそうだが、ここでは考えないことにする
- permutationsを使うために数値をstringに変換して並び替える
- 一番大きい場合はFalseを返すので、IndexError時にFalseを返すことにする
</details>

<details>
<summary>026.py - Write a Python program to find the list with maximum and minimum length using lambda.</summary>

- min(list, key)でkeyに指定された処理の後のlistの要素の最小値が求められる
- maxでも同様
</details>

<details>
<summary>027.py - Write a Python program to sort each sublist of strings in a given list of lists using lambda.</summary>

- mapで処理する

</details>

<details>
<summary>028.py - Write a Python program to sort a given list of lists by length and value using lambda.</summary>

- sortedで処理する
- keyのlambdaにはlen(l)だけでなくリスト自体も指定する
- 2つのkeyでソートするときはlambda x: (x[0], x[1])のようにタプルで指定する

</details>

<details>
<summary>029.py - Write a Python program to find the maximum value in a given heterogeneous list using lambda.</summary>

- stringも含まれているのでまずisinstanceでソートする
- isinstance(object, classinfo)でデータ型の比較が可能 (Trueなら等しい)

</details>

<details>
<summary>030.py - Write a Python program to sort a given matrix in ascending order according to the sum of its rows using lambda.</summary>

- keyをsumにしてsortedする

</details>

<details>
<summary>031.py - Write a Python program to extract specified size of strings from a give list of string values using lambda.</summary>

- filterを使う

</details>

<details>
<summary>032.py - Write a Python program to count float number in a given mixed list using lambda.</summary>

- filterとisinstanceを使う

</details>

<details>
<summary>033.py - Write a Python program to check whether a given string contains a capital letter, a lower case letter, a number and a minimum length using lambda.</summary>

- パスワードの制約みたいなイメージで判定する
- 最低文字数はとりあえず8文字とする
- 制約を満たしていればTrue、そうでなければFalseとする
- 一つでも入っていればいいのでanyを使う
- 可読性が鬼のように悪いので、本当はちゃんとdefで書いた方がいいとは思う

</details>

<details>
<summary>034.py - Write a Python program to filter the height and width of students, which are stored in a dictionary using lambda.</summary>

- 出力の都合でtupleを強引にdictにする必要がある

</details>

<details>
<summary>035.py - Write a Python program to check whether a specified list is sorted or not using lambda.</summary>

- 題意の例だとソートされているのにFalseと出ていて何かおかしい気がするが、すでにソートされていればTrue、そうでなければFalseと判定するコードを書くことにする

</details>

<details>
<summary>036.py - Write a Python program to extract the nth element from a given list of tuples using lambda.</summary>

- mapを使う

</details>

<details>
<summary>037.py - Write a Python program to sort a list of lists by a given index of the inner list using lambda.</summary>

- sortedを使う

</details>

<details>
<summary>038.py - Write a Python program to remove all elements from a given list present in another list using lambda.</summary>

- list.remove(x)でlist内の要素xを削除できるが、返り値がないのでここではfilterを使う

</details>

<details>
<summary>039.py - Write a Python program to find the elements of a given list of strings that contain specific substring using lambda.</summary>

- filterを使う

</details>

<details>
<summary>040.py - Write a Python program to find the nested lists elements, which are present in another list using lambda.</summary>

- 流石に内包表現を使った方が見やすいので内包表記とfilterで書く (mapとfilterのみで書けるのか？)

</details>
