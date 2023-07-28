# React Coding Guideline

WIP

## 原則

- 可読性に配慮する。
- Core Web Vitals のスコアを下げるようなコードを書かない。
  - パフォーマンスを考慮する。
- アクセシビリティに配慮する。

## Coding

### Format

基本的に Code Formatter のルールにしたがう。ルールは共通設定を踏襲する。

- TODO: VSCode の導入手順
- TODO: 必要であれば共通設定のリポジトリ

---

### 命名規則を統一する

#### やること

- ファイル名及びディレクトリ名は全て kebab-case とする。
  - 決めただけです。理由は特にないです。
- 機能別で別パターンのときはダッシュを使う。
  - 決めただけです。理由は特にないです。

#### メリット

- 一貫性を持たせることで、すばやく識別することができる

#### コード例

##### Good👍

```bash
src
├design-system
  ├components
    ├button.tsx
    ├button.test.tsx
    ├button.stories.tsx
    ├primary-layout.tsx
    ├primary-layout.test.tsx
    ├primary-layout.stories.tsx

```

##### Bad👎

###### 決めたルールに従っていない

```bash
src
├designSystem
  ├components
    ├Button.tsx
    ├Button.test.tsx
    ├Button.stories.tsx
    ├PrimaryLayout.tsx
    ├PrimaryLayout.test.tsx
    ├PrimaryLayout.stories.tsx
```

#### 参考

- https://angular.jp/guide/styleguide#%E3%83%89%E3%83%83%E3%83%88%E3%81%A8%E3%83%80%E3%83%83%E3%82%B7%E3%83%A5%E3%81%AB%E3%82%88%E3%82%8B%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E5%88%86%E5%89%B2

---

### JSX にそのまま無名関数を書くことは避ける。

#### やること

- コンポーネントに渡す関数を関数式で定義する

#### メリット

- レンダリングおよび処理を呼び出すたびに無名関数が生成されるのを避ける
  - 無名関数だと、レンダリングされるたびに関数が生成され、メモ化できないため、パフォーマンスが悪くなる。

#### コード例

##### Good👍

###### コンポーネントに渡す関数を関数式で定義している

```tsx
const handleClick = () => dispatch(SOME_ACTION)
<SomeComponent onClick={handleClick} />
```

##### Bad👎

###### コンポーネントに渡す関数を無名関数で定義している

```tsx
<SomeComponent onClick={() => dispatch(SOME_ACTION)} />
```

#### 参考

- https://legacy.reactjs.org/docs/faq-functions.html#arrow-function-in-render

---

### パフォーマンスを上げるために Memo 化を図る

#### やること

- 適切に `useMemo` , `useCallback`のようなパフォーマンスを上げる hooks を積極的に利用する。

#### 参考

- https://react.dev/reference/react#performance-hooks

---

### コンポーネントの遅延ローディングを利用する

#### やること

- [lazy](https://react.dev/reference/react/lazy)及び[Suspense](https://react.dev/reference/react/Suspense)を利用して、コンポーネントの遅延ローディングを行う。

---

### アセットはすべて最小化しておく

#### やること

- 肥大化したファイルサイズの画像を使わないように、[適度なサイズに圧縮する](https://www.notion.so/ccbc5f85a69c419fba9c33405a25fbc6)

---

### default export を使わない

#### やること

- コンポーネントや hooks などは named export を利用する

#### 例外

- フレームワークやライブラリが default export を要求している場合は利用する
  - Next.js のページコンポーネント
    - https://nextjs.org/docs/messages/page-without-valid-component
  - [lazy](https://react.dev/reference/react/lazy)が依存する[import 関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)

#### 参考

- https://qiita.com/genshun9/items/4a00aa6c709b9f024821

---
