# JSDoc

## React のコンポーネント

## カスタムフックス

### 記載事項

```
/**
 * react-routerのバージョンアップによるエラーを吸収する目的で作成したWrapper
 */
const useHistory = () => {
```

### 必要な場合に付与するアノテーション

## 関数

### 記載事項

- 作成意図や期待動作

### 引数が 2 つ以上ある場合は１つのオブジェクトにしつつ、引数の各プロパティに説明を足したなら足す

```ts
type WaitTimeParams = Readonly<{
  /**
   * 待機時間（単位：ミリ秒）
   */
  time: number
  /**
   * 待機回数（単位：回）
   */
  count: number
}>
const waitTime =(params: WaitTimeParams) => {
  ...
  return totalWait
}
```

## その他、必要に応じて付与するアノテーション

- @deprecated

使用して欲しくない場合に記載すると vscode の場合、該当するアイテムに取り消し線が引かれるため、便利です。

```
/**
 * @deprecated 関数で運用すると()の記載が必要なため、定数のMEDIA_QUERY_PCを用意した
 */
export const mediaQueryPc = (style?: StyleType) => mediaQueryMin(threshold[PC], style)
export const MEDIA_QUERY_PC = mediaQueryMin(threshold[PC])()
```

- @example

使用例を記載する場合に使用します。

```
/**
 * styledで定義するcssでPCモードを設定
 * @param style 非推奨だがcss文字列の入力も可能
 * @returns css文字列…`@media screen and...`
 * @example
 * ${mediaQueryPc()}{
 *  color:red;
 * }
 */
export const mediaQueryPc = (style?: StyleType) => ...
```
