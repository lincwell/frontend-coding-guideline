<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [JS and TS Coding Guideline](#js-and-ts-coding-guideline)
  - [関数の引数が2つ以上ある時はオブジェクトにする](#%E9%96%A2%E6%95%B0%E3%81%AE%E5%BC%95%E6%95%B0%E3%81%8C2%E3%81%A4%E4%BB%A5%E4%B8%8A%E3%81%82%E3%82%8B%E6%99%82%E3%81%AF%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E3%81%99%E3%82%8B)
    - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88)
    - [コード例 - bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad)
    - [コード例 - good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good)
    - [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JS and TS Coding Guideline

## 関数の引数が2つ以上ある時はオブジェクトにする

Options Objectパターンで引数を受け取る

### メリット

- 引数の値が何を指すのか分かりやすい
- 使う側で引数の順番を気にする必要がない

### コード例 - bad👎

```typescript
const findProducts = (name: string, isSale: boolean, withDetails: boolean, freeShipping: boolean) => {
    ...
}

findProducts("products", true, true, true);
```

### コード例 - good👍

```typescript
type Args = {
    name: string
    isSale: boolean
    withDetails: boolean
    freeShipping: boolean
}

const findProducts = (args: Args) => {
 ...
}

findProducts({ name: "products", isSale: true, withDetails: true, freeShipping: true });
```

### 参考

- https://typescriptbook.jp/reference/functions/keyword-arguments-and-options-object-pattern
- https://typescriptbook.jp/tips/receive-an-object-return-an-object
