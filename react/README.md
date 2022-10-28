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

### Readability

- React コンポーネント定義の命名は UpperCamelCase とする。
- ファイル名は、
  - React コンポーネントに対しては `UpperCamelCase.tsx`
  - それ以外は `lowerCamelCase.ts`
- ディレクトリ名は、`kebab-case` とする。
- スタイルは `styled-components` で実装する。詳細は (TODO: CSS in JS) を参照。
- 不要な `div` を避け、`React.Fragment` を用いる。
  - セマンティクスの観点から

```
// Good
return (
  <>
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </>
);

// Bad
return (
  <div>
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </div>
);
```

- JSX にそのまま無名関数を書くことは避ける。

```
// Good
const handleClick = () => dispatch(SOME_ACTION)
<SomeCompoennt onClick={handleClick} />

// Bad
<SomeCompoennt onClick={() => dispatch(SOME_ACTION)} />
```

- 文字列を props に渡すときは `{}` ではなく文字列リテラルとして渡す。

```
// Good
<FooComponent foo="baz" />

// Bad
<FooComponent foo={'baz'} />
```

- 正しい英単語を使う。
- import の順序に一貫性をもたせる。

  - 必要であれば、[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) などを用いる。

### Performance

- 適切に `useMemo` を利用する。

  - 更新回数が少なく、かつ重い処理である場合、`useMemo` を使うことを検討する。

- 遅延実行して問題ないコンポーネントに対しては、積極的に `React.lazy` / `Suspense` を使う。

- アセットはすべて最小化しておく。

### UX / Accessibility

TODO: React の話から逸れそうだから分けたほうがいいかも

- ユーザーのアクションに対して常に適切なフィードバックを用意する。
  - API の実行結果で表示を分ける。
  - 時間のかかる処理を行う場合、ローディングアイコンを表示する。
- Layout Shift を可能な限り避ける。
- 画像に対しては常に `alt` 属性をつける。[An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) ([日本語訳](https://qiita.com/hibikikudo/items/f710933664094632540d))
- 適切に aria や `role` 属性を付与する。
- 適切なセマンティクスで記述する。

### その他

- 常にテストを書く
- 常に Storybook を書く

# References

[21 Best Practices for a Clean React Project](https://betterprogramming.pub/21-best-practices-for-a-clean-react-project-df788a682fb)
