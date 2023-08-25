<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [**⚠️⚠️⚠️このリポジトリはpublicです。リンクウェルの実装に関する情報（利用しているコードを記載するなど）は絶対に書かないでください。⚠️⚠️⚠️**](#%E3%81%93%E3%81%AE%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%AFpublic%E3%81%A7%E3%81%99%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%A6%E3%82%A7%E3%83%AB%E3%81%AE%E5%AE%9F%E8%A3%85%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%83%85%E5%A0%B1%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E8%A8%98%E8%BC%89%E3%81%99%E3%82%8B%E3%81%AA%E3%81%A9%E3%81%AF%E7%B5%B6%E5%AF%BE%E3%81%AB%E6%9B%B8%E3%81%8B%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84)
  - [貢献方法](#%E8%B2%A2%E7%8C%AE%E6%96%B9%E6%B3%95)
    - [基本事項](#%E5%9F%BA%E6%9C%AC%E4%BA%8B%E9%A0%85)
    - [準備](#%E6%BA%96%E5%82%99)
    - [ガイドライン項目追加](#%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3%E9%A0%85%E7%9B%AE%E8%BF%BD%E5%8A%A0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# **⚠️⚠️⚠️このリポジトリはpublicです。リンクウェルの実装に関する情報（利用しているコードを記載するなど）は絶対に書かないでください。⚠️⚠️⚠️**

## 貢献方法

### 基本事項

ルールの追加・修正を歓迎しています。  
その際、基本的に [Issue](https://github.com/lincwell/frontend-coding-guideline/issues) を立てるようにしてください。

### 準備

npmパッケージを利用するのでinstallしてください。

```bash
npm install
```

### ガイドライン項目追加

ガイドラインに項目を追加したい場合、必ず以下の項目を含めてください。

- タイトル及び概要（必須）
- メリット（必須）
- デメリット
- コード例
  - Good👍
    - Goodの例タイトル
  - Bad:👎
    - Badの例タイトル
- 例外
- 参考

例

````markdown
## JSDocを書く

処理に対してJSDocを書く。
TypeScriptを使っている場合、型の情報はJSDocに含めなくても良い。

### メリット

- 実装の意図を込めることができる

### デメリット

- メンテナンスコストが上がる

### コード例 - good👍

#### JSDocがある

```ts
/**
 * Yupで利用する最小文字数のバリデーションメッセージを作成する
 *
 * @example
 * const validatePassword = minMessageCreator(8)
 * Yup.string().required().min(validatePassword.minLength, validatePassword.minMessage)
 */
const minMessageCreator = (minLength: number) => {
  const minMessage = `最低${minLength}文字以上で入力してください`;

  return {
    minLength,
    minMessage,
  };
};
```

#### 命名で明らかに分かる場合にJSDocがない

```ts
const sum = (a: number, b: number) => a + b;
```

### コード例 - Bad👎

#### JSDocがない

```ts
const minMessageCreator = (minLength: number) => {
  const minMessage = `最低${minLength}文字以上で入力してください`;

  return {
    minLength,
    minMessage,
  };
};
```

### 例外

### 参考

- https://www.typescriptlang.org/ja/docs/handbook/jsdoc-supported-types.html
````
