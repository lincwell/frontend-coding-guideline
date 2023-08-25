# JS and TS Coding Guideline

wip

## forEach, for を極力使わない

- map,filter,reduceなどの配列メソッドを用いる

### メリット

- 行数、ネストを削減できる
- 処理の目的が

### デメリット

- break / continueが使えない
- forに比べて処理速度が遅い

### コード例 - bad👎

```typescript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  squaredNumbers.push(numbers[i] * numbers[i]);
}

console.log(squaredNumbers); // 出力: [1, 4, 9, 16, 25]
```

### コード例 - good👍

```typescript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // 出力: [1, 4, 9, 16, 25]
```
