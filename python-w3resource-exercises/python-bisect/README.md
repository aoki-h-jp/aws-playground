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
