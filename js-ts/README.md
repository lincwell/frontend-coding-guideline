<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JS and TS Coding Guideline](#js-and-ts-coding-guideline)
  - [テンプレートリテラル使う](#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%83%AA%E3%83%86%E3%83%A9%E3%83%AB%E4%BD%BF%E3%81%86)
    - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88)
    - [コード例 - bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad)
    - [コード例 - good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JS and TS Coding Guideline

wip

## テンプレートリテラル使う

- **+記号**を使って文字列を結合するのをやめてテンプレートリテラルを用いる

### メリット

- 文字列の中に変数を入れることができるので、可読性が高い
- 改行を含めることができる

### コード例 - bad👎

```typescript
const item = "apple";
const quantity = 5;

const message = "I bought " + quantity + " " + item + "s.";

console.log(message);
```

### コード例 - good👍

```typescript
const item = "apple";
const quantity = 5;

const message = `I bought ${quantity} ${item}s.`;

console.log(message);
```
