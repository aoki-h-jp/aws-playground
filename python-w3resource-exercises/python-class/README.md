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

<details>
<summary>006.py - Write a Python function student_data () which will print the id of a student (student_id). If the user passes an argument student_name or student_class the function will print the student name and class.</summary>

- student_nameとstudent_classが渡されたら、という処理をkwargsで受け取る
</details>

<details>
<summary>007.py - Write a simple Python class named Student and display its type. Also, display the __dict__ attribute keys and the value of the __module__ attribute of the Student class.</summary>

- 何もしないStudentクラスを作り、特殊メソッドの返り値を出力する
</details>

<details>
<summary>008.py - Write a Python program to crate two empty classes, Student and Marks. Now create some instances and check whether they are instances of the said classes or not. Also, check whether the said classes are subclasses of the built-in object class or not.</summary>

- 何もしないStudentクラスとMarksクラスを作る
- isinstance(インスタンス, クラス)でそのクラスのインスタンスかどうかを出力できる
</details>

<details>
<summary>009.py - Write a Python class named Student with two attributes student_name, marks. Modify the attribute values of the said class and print the original and modified values of the said attributes.</summary>

- getattrでclassのattributeの値が取得でき、setattrでclassのattributeの値を変更できる
</details>

<details>
<summary>010.py - Write a Python class named Student with two attributes student_id, student_name. Add a new attribute student_class and display the entire attribute and their values of the said class. Now remove the student_name attribute and display the entire attribute with values.</summary>

- 新しいattributeを追加する時には直接ピリオド以下にその名前を指定すれば値を指定できる
- del (attribute)でそのattributeを消せる
</details>

<details>
<summary>011.py - Write a Python class named Student with two attributes student_id, student_name. Add a new attribute student_class. Create a function to display the entire attribute and their values in Student class.</summary>

- student_idとstudent_nameをもつStudentクラスを作り、そのインスタンスにstudent_classを加える
- Studentクラスの中にdisplay関数を作る
</details>

<details>
<summary>012.py - Write a Python class named Student with two instances student1, student2 and assign given values to the said instances attributes. Print all the attributes of student1, student2 instances with their values in the given format.</summary>

- student_idは共通で持っているっぽいので最初から持たせるが、それ以外は後から与えることにする
- その他は011.pyとほぼ同じ
</details>

<details>
<summary>b001.py - Write a Python class to convert an integer to a roman numeral.</summary>

- ローマ数字の対応は1 = I, 5 = V, X = 10, L = 50, C = 100, D = 500, M = 1000
- 4ならIV、6ならVIというように順番も考慮する (4,9の時に注意)
- 5000より大きい数値は入らないものとする
- わざわざクラスにしなくても良さそうだが、指定されているのでそうする
</details>

<details>
<summary>b002.py - Write a Python class to convert a roman numeral to an integer.</summary>

- b001.pyの逆をやる
</details>

<details>
<summary>b003.py - Write a Python class to find validity of a string of parentheses, '(', ')', '{', '}', '[' and ']. These brackets must be close in the correct order, for example "()" and "()[]{}" are valid but "[)", "({[)]" and "{{{" are invalid.</summary>

- 隣のカッコと形が同じかどうかという視点で判定する（[{}]のようなネストは考えない）
</details>
