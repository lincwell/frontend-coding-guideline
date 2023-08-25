# JS and TS Coding Guideline

## early return を使用する
- ifのネストが深くなってくると可読性が下がる
- 条件に一致した場合に処理をすぐ抜けるため、フローが直感的

### メリット
- コードの可読性向上
  
### コード例 - bad👎

```typescript
const earlyReturn =  (name:string) => {
    if (name) {
        if (name === "James") {
            return name
        } else {
            return "execpt James"
        }
    } else {
        return 'no names'
    } 
}
```
### コード例 - good👍

```typescript
const earlyReturn =  (name:string) => {
    if (!name) return 'no names'
    if (name === "James") {
        return name
    }
    return 'except James'
}
```

