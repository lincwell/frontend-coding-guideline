<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [原則](#%E5%8E%9F%E5%89%87)
- [Format](#format)
- [ファイル名及びディレクトリ名の命名規則を統一する](#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E5%8F%8A%E3%81%B3%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E5%90%8D%E3%81%AE%E5%91%BD%E5%90%8D%E8%A6%8F%E5%89%87%E3%82%92%E7%B5%B1%E4%B8%80%E3%81%99%E3%82%8B)
  - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88)
  - [コード例 - Good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good)
  - [コード例 - Bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad)
    - [決めたルールに従っていない](#%E6%B1%BA%E3%82%81%E3%81%9F%E3%83%AB%E3%83%BC%E3%83%AB%E3%81%AB%E5%BE%93%E3%81%A3%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84)
  - [参考](#%E5%8F%82%E8%80%83)
- [変数名の命名規則を統一する](#%E5%A4%89%E6%95%B0%E5%90%8D%E3%81%AE%E5%91%BD%E5%90%8D%E8%A6%8F%E5%89%87%E3%82%92%E7%B5%B1%E4%B8%80%E3%81%99%E3%82%8B)
  - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88-1)
  - [コード例 - Good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good-1)
  - [コード例 - Bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad-1)
    - [決めたルールに従っていない](#%E6%B1%BA%E3%82%81%E3%81%9F%E3%83%AB%E3%83%BC%E3%83%AB%E3%81%AB%E5%BE%93%E3%81%A3%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84-1)
- [JSX にそのまま無名関数を書くことは避ける。](#jsx-%E3%81%AB%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E7%84%A1%E5%90%8D%E9%96%A2%E6%95%B0%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%93%E3%81%A8%E3%81%AF%E9%81%BF%E3%81%91%E3%82%8B)
  - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88-2)
  - [コード例 - Good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good-2)
    - [コンポーネントに渡す関数を関数式で定義している](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E6%B8%A1%E3%81%99%E9%96%A2%E6%95%B0%E3%82%92%E9%96%A2%E6%95%B0%E5%BC%8F%E3%81%A7%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B)
  - [コード例 - Bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad-2)
    - [コンポーネントに渡す関数を無名関数で定義している](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E6%B8%A1%E3%81%99%E9%96%A2%E6%95%B0%E3%82%92%E7%84%A1%E5%90%8D%E9%96%A2%E6%95%B0%E3%81%A7%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B)
  - [参考](#%E5%8F%82%E8%80%83-1)
- [パフォーマンスを上げるために Memo 化を図る](#%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%82%92%E4%B8%8A%E3%81%92%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB-memo-%E5%8C%96%E3%82%92%E5%9B%B3%E3%82%8B)
  - [参考](#%E5%8F%82%E8%80%83-2)
- [コンポーネントの遅延ローディングを利用する](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E9%81%85%E5%BB%B6%E3%83%AD%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B)
- [アセットはすべて最小化しておく](#%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%E3%81%AF%E3%81%99%E3%81%B9%E3%81%A6%E6%9C%80%E5%B0%8F%E5%8C%96%E3%81%97%E3%81%A6%E3%81%8A%E3%81%8F)
- [default export を使わない](#default-export-%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  - [例外](#%E4%BE%8B%E5%A4%96)
  - [参考](#%E5%8F%82%E8%80%83-3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 原則

- 可読性に配慮する。
- Core Web Vitals のスコアを下げるようなコードを書かない。
  - パフォーマンスを考慮する。
- アクセシビリティに配慮する。

# Format

基本的に Code Formatter のルールにしたがう。ルールは共通設定を踏襲する。

- TODO: VSCode の導入手順
- TODO: 必要であれば共通設定のリポジトリ

# ファイル名及びディレクトリ名の命名規則を統一する

- ファイル名及びディレクトリ名は全て小文字の snake_case とする。
  - 決めただけです。理由は特にないです。

## メリット

- 一貫性を持たせることで、すばやく識別することができる

## コード例 - Good👍

```bash
src
├design_system
  ├components
    ├button.tsx
    ├button.test.tsx
    ├button.stories.tsx
    ├primary_layout.tsx
    ├primary_layout.test.tsx
    ├primary_layout.stories.tsx

```

## コード例 - Bad👎

### 決めたルールに従っていない

```bash
src
├designSystem
  ├components
    ├Button.tsx
    ├Button.test.tsx
    ├Button.stories.tsx
    ├PrimaryLayout.tsx
    ├Primary-layout.test.tsx
    ├PrimaryLayout.stories.tsx
```

## 参考

- https://angular.jp/style-guide#%E3%83%89%E3%83%83%E3%83%88%E3%81%A8%E3%83%80%E3%83%83%E3%82%B7%E3%83%A5%E3%81%A7%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E3%82%92%E5%8C%BA%E5%88%87%E3%82%8B

# 変数名の命名規則を統一する

- 画像をimport した変数名は lowerCamelCase とする。
  - 決めただけです。理由は特にないです。

## メリット

- 一貫性を持たせることで、すばやく識別することができる

## コード例 - Good👍

```ts
import imgName from "assets/img_name.png";
```

## コード例 - Bad👎

### 決めたルールに従っていない

```ts
import ImgName from "assets/img_name.svg";
import img_name from "assets/img_name";
```

# JSX にそのまま無名関数を書くことは避ける。

- コンポーネントに渡す関数を関数式で定義する

## メリット

- レンダリングおよび処理を呼び出すたびに無名関数が生成されるのを避ける
  - 無名関数だと、レンダリングされるたびに関数が生成され、メモ化できないため、パフォーマンスが悪くなる。

## コード例 - Good👍

### コンポーネントに渡す関数を関数式で定義している

```tsx
const handleClick = () => dispatch(SOME_ACTION)
<SomeComponent onClick={handleClick} />
```

## コード例 - Bad👎

### コンポーネントに渡す関数を無名関数で定義している

```tsx
<SomeComponent onClick={() => dispatch(SOME_ACTION)} />
```

## 参考

- https://legacy.reactjs.org/docs/faq-functions.html#arrow-function-in-render

# パフォーマンスを上げるために Memo 化を図る

- 適切に `useMemo` , `useCallback`のようなパフォーマンスを上げる hooks を積極的に利用する。

## 参考

- https://react.dev/reference/react#performance-hooks

# コンポーネントの遅延ローディングを利用する

- [lazy](https://react.dev/reference/react/lazy)及び[Suspense](https://react.dev/reference/react/Suspense)を利用して、コンポーネントの遅延ローディングを行う。

# アセットはすべて最小化しておく

- 肥大化したファイルサイズの画像を使わないように、[適度なサイズに圧縮する](https://www.notion.so/ccbc5f85a69c419fba9c33405a25fbc6)

# default export を使わない

- コンポーネントや hooks などは named export を利用する

## 例外

- フレームワークやライブラリが default export を要求している場合は利用する
  - Next.js のページコンポーネント
    - https://nextjs.org/docs/messages/page-without-valid-component
  - [lazy](https://react.dev/reference/react/lazy)が依存する[import 関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)

## 参考

- https://qiita.com/genshun9/items/4a00aa6c709b9f024821
