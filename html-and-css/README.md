<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [HTML and CSS Coding Guideline](#html-and-css-coding-guideline)
  - [Format](#format)
  - [Basics](#basics)
    - [HTML](#html)
    - [CSS](#css)
  - [その他](#%E3%81%9D%E3%81%AE%E4%BB%96)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# HTML and CSS Coding Guideline

## Format

基本的に Code Formatter のルールにしたがう。ルールは共通設定を踏襲する。

## Basics

### HTML

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/) に準拠したコードを書く。
- スタイルを直接 HTML 内に書くことは基本的に避ける。
- セマンティックなマークアップで記述する。
  - 見出しには `h1 〜 h5` を用いる。
  - 文章には、原則として `p` を用いる。
- パフォーマンスに配慮する。
  - 初期描画が不要な `img` 要素に対しては `loading=lazy` を付与する。

### CSS

**CSS in JS (React) で記載する場合は下記のルールは適用しません。CSS in JS のドキュメント（TODO）を参照してください。**

スタイルを指定するクラスには Chainable BEM Modifier の考え方を用いる。フォーマットは下記のようにする。
`.block__element`
`.--modifier`

[ref](https://webuild.envato.com/blog/chainable-bem-modifiers/)

```css
/* Good */
.form {
  &__button {
    color: white; // default
    border: #333; // default
    &.--primary {
      color: orange;
    }
    &.--secondary {
      color: blue;
    }
    &.--disabled {
      opacity: 0.3;
    }
  }
}
```

```html
<!-- Good -->
<form class="container__form">
  ...
  <button class="form__button --primary">Submit</button>
  <button class="form__button --secondary --disabled">Disabled</button>
</form>
```

```css
/* CSS */
.form__button--primary {
  color: orange;
  border: #333;
}
.form__button--secondary {
  color: blue;
  border: #333;
}
```

```html
<!-- HTML -->
<form class="container__form">
  ...
  <button class="form__button--primary">Submit</button>
</form>
```

単語の区切りにはハイフンを用いる (`kebab-case`)

```css
/* Good */
.contact-form
/* Bad */
.contact_form
.contactForm
```

制御のためのクラス名は、その目的がわかるようにする。例えば、下記のように命名する。

- JavaScript によって操作される要素 => `js-element`
- 表示切り替えを行う要素 =>`is-show`

```html
<!-- Good -->
<header class="js-header">Header</header>
<div class="is-show">Visible Text</div>
```

- アクセシビリティ・レスポンシブ対応を考慮し、原則的に px を用いず、rem や % で表現する。
  - border など、固定幅で問題ない場合は px を用いる。

```css
/* Good */
width: 100%;
font-size: 1.25rem;

/* Bad */
width: 375px;
font-size: 20px;
```

可能な限り Shorthand で記述する。

```css
/* Good */
padding: 0 1.5rem 2rem;

/* Bad */
padding-top: 0;
padding-right: 1.5rem;
padding-left: 1.5rem;
padding-bottom: 2rem;

/* Bad */
padding: 0 1.5rem 2rem 1.5rem;
```

- id セレクタ、タイプセレクタへのスタイル指定はしない（class セレクタのみ）
  - スタイルがタイプに依存することで、保守性が下がるため
  - ul や ol に対しての li や、dl に対しての dt や dd などは対象外（構造としてタイプが決まってしまっていて変更になる可能性が少ないため）

```css
/* Good */
.header {
  / * some style */
}

/* Bad */
header {
  / * some style */
}

/* Bad */
#header {
  / * some style */
}
```

- 子セレクタ、子孫セレクタは極力使わない
  - ブラウザへの負荷が高まるため
  - 影響範囲が分かりづらくなるため

```css
/* Good */
.hoge-fuga {
  / * some style */
}

/* Bad */
.hoge .fuga {
  / * some style */
}
```

- 値が 0 の場合は単位を指定しない

```css
/* Good */
.example {
  margin-top: 0;
}

/* Bad */
.example {
  margin-top: 0rem;
}
```

- !important を使用しない

## その他

- 文字エンコーディングは常に UTF-8 とする。
- リソースは適切なサイズに圧縮する。
