# Python basic (Part -I)

## How to execute

```shell
% python 001.py
```

## Key points

<details>
<summary>001.py - Write a Python program to print the following string in a specific format (see the output).</summary>

- \nで改行
- \tでタブ挿入
- 長すぎる引数は\で改行する
</details>

<details>
<summary>002.py - Write a Python program to get the Python version you are using.</summary>

- sys.versionで出力可能
</details>

<details>
<summary>003.py - Write a Python program to display the current date and time.</summary>

- datetime.datetime.now()で出力可能
</details>

<details>
<summary>004.py - Write a Python program which accepts the radius of a circle from the user and compute the area.</summary>

- math.piでπの値が取得可能
- built-in methodのpow()で冪乗が計算可能、pow(底, 指数)
- pow(3, 2)は9
</details>

<details>
<summary>005.py - Write a Python program which accepts the user's first and last name and print them in reverse order with a space between them.</summary>

- 間に空白を入れる時は" "
</details>

<details>
<summary>006.py - Write a Python program which accepts a sequence of comma-separated numbers from user and generate a list and a tuple with those numbers.</summary>

- inputで受け取ったStringをsplitする
- split(',')で,を区切り文字として分割でき、区切ったlistが返ってくる
</details>

<details>
<summary>007.py - Write a Python program to accept a filename from the user and print the extension of that.</summary>

- split後、必ず2番目に拡張子が来るのでsplit('.')[1]で取得できる
- 仮にフルパスを与えられた時のためにos.path.basenameを使用する

</details>

<details>
<summary>008.py - Write a Python program to display the first and last colors from the following list.</summary>

- [-1]でlistの最後の要素を取得できる
</details>

<details>
<summary>009.py - Write a Python program to display the examination schedule. (extract the date from exam_st_date).</summary>

- 書式化演算子%を使うとtupleを利用して文字列を生成できる
- (変換指定子付きの文字列) % tupleが基本の使い方
- 変換指定子%iは符号付き10進数の整数を表す
</details>

<details>
<summary>010.py - Write a Python program that accepts an integer (n) and computes the value of n+nn+nnn.</summary>

- 009とほぼ同じ
- 答えを出すだけなら与えられた数の11倍, 111倍を足せば良さそうだが、その場合2桁以上に対応できないので文字列の性質を利用する
</details>

<details>
<summary>011.py - Write a Python program to print the documents (syntax, description etc.) of Python built-in function(s).</summary>

- built-in functionでは__doc__でdocstringを呼べる
</details>

<details>
<summary>012.py - Write a Python program to print the calendar of a given month and year.
Note : Use 'calendar' module.</summary>

- calendar.month(year, month)でカレンダーを呼べる
</details>

<details>
<summary>013.py - Write a Python program to print the following 'here document'.</summary>

- print()の中で引用符を3つ続けるとhere documentの形式になる
</details>

<details>
<summary>014.py - Write a Python program to calculate number of days between two dates.</summary>

- timedeltaを使っても同じことができそう
- *tupleでタプルはunpackできる
</details>

<details>
<summary>015.py - Write a Python program to get the volume of a sphere with radius 6.</summary>

- V = 4/3 * pi * r^3
</details>

<details>
<summary>016.py - Write a Python program to get the difference between a given number and 17, if the number is greater than 17 return double the absolute difference.</summary>

- 題意の通り分岐処理を書く
</details>

<details>
<summary>017.py - Write a Python program to test whether a number is within 100 of 1000 or 2000.</summary>

- 与えられた数値が900 ~ 1100 or 1900 ~ 2100の範囲内にあるかどうかという条件はabsを使えばよりシンプルに書ける
</details>

<details>
<summary>018.py - Write a Python program to calculate the sum of three given numbers, if the values are equal then return three times of their sum.</summary>

- AとBとCの値が等しい時「A == B == C」と書ける
</details>

<details>
<summary>019.py - Write a Python program to get a new string from a given string where "Is" has been added to the front. If the given string already begins with "Is" then return the string unchanged.</summary>

- Isで始まるかどうかという判定の前に長さが2未満だとその判定でエラーが出ることに気を付ける
</details>

<details>
<summary>020.py - Write a Python program to get a string which is n (non-negative integer) copies of a given string.</summary>

- 'aa' * 3 => 'aaaaaa'
</details>

<details>
<summary>021.py - Write a Python program to find whether a given number (accept from the user) is even or odd, print out an appropriate message to the user.</summary>

- 題意の通りの分岐処理を書く
</details>

<details>
<summary>022.py - Write a Python program to count the number 4 in a given list.</summary>

- list.count()で要素のカウントができる
</details>

<details>
<summary>023.py - Write a Python program to get the n (non-negative integer) copies of the first 2 characters of a given string. Return the n copies of the whole string if the length is less than 2.</summary>

- 020.pyとほぼ同じ点に気を付ける
</details>

<details>
<summary>024.py - Write a Python program to test whether a passed letter is a vowel or not.</summary>

- 'vowel' if given_ltr in ['a', 'i', 'u', 'e', 'o']のリストは'aiueo'で代用できる
- 英語圏だとaeiouが普通らしい
</details>

<details>
<summary>025.py - Write a Python program to check whether a specified value is contained in a group of values.</summary>

- 題意の通りの分岐処理を書く
</details>

<details>
<summary>026.py - Write a Python program to create a histogram from a given list of integers.</summary>

- ヒストグラムの描画なのでmatplotlib.pyplot.histを使う
</details>

<details>
<summary>027.py - Write a Python program to concatenate all elements in a list into a string and return it.</summary>

- str.joinメソッドを使う
</details>

<details>
<summary>028.py - Write a Python program to print all even numbers from a given numbers list in the same order and stop the printing if any numbers that come after 237 in the sequence.</summary>

- 題意の通りの処理をfor文で書く
</details>

<details>
<summary>029.py - Write a Python program to print out a set containing all the colors from color_list_1 which are not present in color_list_2.</summary>

- 差集合を利用する
</details>

<details>
<summary>030.py - Write a Python program that will accept the base and height of a triangle and compute the area.</summary>

- S = 1/2 * b * h
</details>

<details>
<summary>031.py - Write a Python program to compute the greatest common divisor (GCD) of two positive integers.</summary>

- mathモジュールのgcd()を利用する
</details>

<details>
<summary>032.py - Write a Python program to get the least common multiple (LCM) of two positive integers.</summary>

- mathモジュールのlcm()を利用する
</details>

<details>
<summary>033.py - Write a Python program to sum of three given integers. However, if two values are equal sum will be zero.</summary>

- set(list)で重複した要素が重なるため、len(list) - len(set(list))を計算すれば重複した要素の数が計算できる
</details>

<details>
<summary>034.py - Write a Python program to sum of two given integers. However, if the sum is between 15 to 20 it will return 20.</summary>

- 題意の通りの分岐処理を書く
</details>

<details>
<summary>035.py - Write a Python program that will return true if the two given integer values are equal or their sum or difference is 5.</summary>

- 題意の通りの分岐処理を書く
</details>
