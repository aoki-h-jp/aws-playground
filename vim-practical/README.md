# vim-practical
- 「実践Vim」の学習記録
- VSCodeの拡張機能「Vim」のemulationで実行


<details>
<summary>Chapter-01 Vimのやり方</summary>
  
## TIPS-001
インデントを効率的に入れたい
```
Line one
Line two
Line three
Line four
```
`j>Gj.j.`
```
Line one
    Line two
        Line three
            Line four
```

## TIPS-002
全ての行末に;を効率よく入れたい
```javascript
var foo = 1
var bar = 'a'
var foobar = foo + bar
```
`A;<Esc>j.j.`
```javascript
var foo = 1;
var bar = 'a';
var foobar = foo + bar;
```

## TIPS-003
空白を効率よく入れたい
```javascript
var foo = "method("+argument1+","+argument2+")";
```
`f+s_+_<Esc>;.;.;.`
```javascript
var foo = "method(" + argument1 + "," + argument2 + ")";
```

## TIPS-004
直前の変更を取り消す場合はどんな変更でも「u」でいい

## TIPS-005
「content」を「copy」に置換したいが、個別に置換するかどうかを決めたい
```
...We're waiting for content before the site can go live...
...If you are content with this, let's go ahead with it...
...We'll launch as soon as we have the content...
```
(カーソルがIf you are contentの「c」にあるとして)`*cwcopy<Esc>n.`
```
...We're waiting for copy before the site can go live...
...If you are content with this, let's go ahead with it...
...We'll launch as soon as we have the copy...
```

## TIPS-006
移動にキー入力1回、何かをするのにキー入力1回が理想形
</details>
