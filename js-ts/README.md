<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [実装の説明にはJSDoc記法によるコメントを付与する](#%E5%AE%9F%E8%A3%85%E3%81%AE%E8%AA%AC%E6%98%8E%E3%81%AB%E3%81%AFjsdoc%E8%A8%98%E6%B3%95%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%82%92%E4%BB%98%E4%B8%8E%E3%81%99%E3%82%8B)
  - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88)
  - [コード例 - Good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good)
  - [コード例 - Bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad)
    - [コメントがインラインコメントになっている](#%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%81%8C%E3%82%A4%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 実装の説明にはJSDoc記法によるコメントを付与する

- 対象実装の説明
- 形式的な説明

など、「ドキュメンテーションの役割を果たす説明」には、JSDoc記法によるコメントを付与する。

JSDocの詳細については[JSDoc](../JSDoc/README.md)を参照

## メリット

- 実装を利用する側で実装の説明を参照できる
- JSDocという公式の仕様に従うことで、周辺ツールのサポートを受けられる
  - https://github.com/styleguidist/react-docgen-typescript
  - https://typedoc.org/

## コード例 - Good👍

```ts
/**
 * 円形にトリミングされたサムネイル画像を取得する
 */
const getThumbnail = (id: string) => {
    ...

    return {
        /**
         * 正方形のため1辺の長さを返す
         * @example 20
         */
        size,
        url,
    }
}
```

## コード例 - Bad👎

### コメントがインラインコメントになっている

```ts
// 円形にトリミングされたサムネイル画像を取得する
const getThumbnail = (id: string) => {
    ...

    return {
        // 正方形のため1辺の長さを返す
        // @example 20
        size,
        url,
    }
}
```
