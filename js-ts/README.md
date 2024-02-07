<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [JS and TS Coding Guideline](#js-and-ts-coding-guideline)
  - [early return を使用する](#early-return-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B)
    - [メリット](#%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88)
    - [コード例 - bad👎](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---bad)
    - [コード例 - good👍](#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B---good)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JS and TS Coding Guideline

## early return を使用する

if文を利用する際にearly return（早期リターン）の手法を取る

### メリット

- ifのネストが深くなるのを回避できる
- コードの複雑性が低減し、保守性が向上する
- 条件に一致した場合に処理をすぐ抜けるため、フローが直感的

### コード例 - bad👎

```typescript
const earlyReturn = (name: string) => {
  if (name) {
    if (name === "James") {
      return name;
    } else {
      return "execpt James";
    }
  } else {
    return "no names";
  }
};
```

### コード例 - good👍

```typescript
const earlyReturn = (name: string) => {
  if (!name) return "no names";
  if (name === "James") {
    return name;
  }
  return "except James";
};
```
