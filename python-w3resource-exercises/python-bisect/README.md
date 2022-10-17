# Python Bisect

## How to execute

```shell
% python 001.py
```

## Summary, Comment
- Pythonでのbisect(二分探索)についての演習
- リストに対してソート順序を保ったまま値を挿入するという場面で有効 (appendしてからsortするより遥かにパフォーマンスが良い)

## Key points

<details>
<summary>001.py - Write a Python program to locate the left insertion point for a specified value in sorted order.</summary>

- bisect.bisect_leftを使ってソート済リストに対して特定の位置に値を挿入する
- bisect_left(ソート済リスト, 挿入したい値)
- 挿入したい値が存在している場合は左に挿入する
</details>

<details>
<summary>002.py - Write a Python program to locate the right insertion point for a specified value in sorted order.</summary>

- bisect.bisect_rightを使う
</details>

<details>
<summary>003.py - Write a Python program to insert items into a list in sorted order.</summary>

- sortedを使えば同じことができるが、bisect.insortを使う
- insortでは探索を行い挿入までを行う
</details>

<details>
<summary>004.py - Write a Python program to find the first occurrence of a given number in a sorted list using Binary Search (bisect).</summary>

- 挿入位置をleftにすることでその数の中で一番最初に挿入できる箇所を見つけられる
</details>

<details>
<summary>005.py - Write a Python program to find the index position of the largest value smaller than a given number in a sorted list using Binary Search (bisect).</summary>

- bisect_leftが0なら-1を返す
</details>

<details>
<summary>006.py - Write a Python program to find the index position of the last occurrence of a given number in a sorted list using Binary Search (bisect).</summary>

- 004のright版
</details>

<details>
<summary>007.py - Write a Python program to find three integers which gives the sum of zero in a given array of integers using Binary Search (bisect).</summary>

- 以下の3問はかなり面倒 (他に簡単なやり方はあるがbisectを使う制約がある、解答に至るまで長い)
- 与えられたリストの中で3つの数を選び (a, b, c)、その総和が0になる組 (a+b+c=0)を探索する
- itertools.combinationを使えば一応1行で書ける
</details>

<details>
<summary>008.py - Write a Python program to find a triplet in an array such that the sum is closest to a given number. Return the sum of the three integers.</summary>

- 与えられたリストの中で3つの数を選び (a, b, c)、その総和がXになる組 (a+b+c=X)を探索する
- もし存在しない場合はXに最も近い(a, b, c)の組の和を返す
</details>

<details>
<summary>009.py - Write a Python program to find four elements from a given array of integers whose sum is equal to a given number. The solution set must not contain duplicate quadruplets.</summary>

- 与えられたリストの中で4つの数を選び (a, b, c, d)、その総和が0になる組 (a+b+c+d=0)を探索する
- 007の4個版
</details>
