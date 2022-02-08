# HTML and CSS Coding Guideline

## Format

基本的に Code Formatter のルールにしたがう。ルールは共通設定を踏襲する。

- TODO: VSCode の導入手順のリンク
- TODO: 共通設定のリポジトリ

## Basics

### HTML

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/) に準拠したコードを書く。
- スタイルを直接 HTML 内に書くことは基本的に避ける。
- セマンティックなマークアップで記述する。
  - 見出しには `h1 〜 h5` を用いる。
  - 文章には、原則として `p` を用いる。
- 要素を並べたい場合、flexbox を用いる。
- 不要なコメントタグを残さない。
- パフォーマンスに配慮する。
  - 初期描画が不要な `img` 要素に対しては `loading=lazy` を付与する。
  - TODO
- アクセシビリティに配慮する
  - `alt` 属性を必ず付与する。[An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) ([日本語訳](https://qiita.com/hibikikudo/items/f710933664094632540d))
  - 適切に aria や `role` 属性を付与する。

### CSS

**CSS in JS (React) で記載する場合は下記のルールは適用しません。CSS in JS のドキュメント（TODO）を参照してください。**

スタイルを指定するクラスには Chainable BEM Modifier の考え方を用いる。フォーマットは下記のようにする。
`.block__element`
`.--modifier`

[ref](https://webuild.envato.com/blog/chainable-bem-modifiers/)

```
// Good CSS
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

```
// Good HTML
<form class="container__form">
  ...
  <button class="form__button --primary">Submit</button>
  <button class="form__button --secondary --disabled">Disabled</button>
</form>
```

```
// Bad CSS
.form__button--primary {
  color: orange;
  border: #333;
}
.form__button--secondary {
  color: blue;
  border: #333;
}
```

```
// Bad HTML
<form class="container__form">
  ...
  <button class="form__button--primary">Submit</button>
</form>
```

単語の区切りにはハイフンを用いる (`kebab-case`)

```
// Good
.contact-form
// Bad
.contact_form
.contactForm
```

制御のためのクラス名は、その目的がわかるようにする。例えば、下記のように命名する。

- JavaScript によって操作される要素 => `js-element`
- 表示切り替えを行う要素 =>`is-show`

```
// Good
<header class="js-header">Header</header>
<div class="is-show">Visible Text</div>
```

- アクセシビリティ・レスポンシブ対応を考慮し、原則的に px を用いず、rem や % で表現する。
  - border など、固定幅で問題ない場合は px を用いる。

```
// Good
width: 100%;
font-size: 1.25rem;

// Bad
width: 375px;
font-size: 20px;

```

可能な限り Shorthand で記述する。

```
// Good
padding: 0 1.5rem 2rem;

// Bad
padding-top: 0;
padding-right: 1.5rem;
padding-left: 1.5rem;
padding-bottom: 2rem;
```

- id セレクタ、タイプセレクタへのスタイル指定はしない（class セレクタのみ）
  - スタイルがタイプに依存することで、保守性が下がるため
  - ul や ol に対しての li や、dl に対しての dt や dd などは対象外（構造としてタイプが決まってしまっていて変更になる可能性が少ないため）

```
// Good
.header {
  / * some style */
}

// Bad
header {
  / * some style */
}

// Bad
#header {
  / * some style */
}
```

- 子セレクタ、子孫セレクタは極力使わない
  - ブラウザへの負荷が高まるため
  - 影響範囲が分かりづらくなるため

```
// Good
.hoge-fuga {
  / * some style */
}

// Bad
.hoge .fuga {
  / * some style */
}
```

- 値が 0 の場合は単位を指定しない

```
// Good
.example {
 margin-top: 0;
}

// Bad
.example {
 margin-top: 0rem;
}
```

- !important を使用しない

## その他

- 文字エンコーディングは常に UTF-8 とする。
- リソースは適切なサイズに圧縮する。
- 不要なファイルはコミットしない。
- ワーディングルールに準拠する。
  - とくに、誤字脱字を出さない
