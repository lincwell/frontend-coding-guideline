<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JSDoc](#jsdoc)
  - [React のコンポーネント](#react-%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88)
  - [カスタムフックス](#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%95%E3%83%83%E3%82%AF%E3%82%B9)
    - [記載事項](#%E8%A8%98%E8%BC%89%E4%BA%8B%E9%A0%85)
    - [必要な場合に付与するアノテーション](#%E5%BF%85%E8%A6%81%E3%81%AA%E5%A0%B4%E5%90%88%E3%81%AB%E4%BB%98%E4%B8%8E%E3%81%99%E3%82%8B%E3%82%A2%E3%83%8E%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)
  - [関数](#%E9%96%A2%E6%95%B0)
    - [記載事項](#%E8%A8%98%E8%BC%89%E4%BA%8B%E9%A0%85-1)
    - [引数が 2 つ以上ある場合は１つのオブジェクトにしつつ、引数の各プロパティに説明を足したなら足す](#%E5%BC%95%E6%95%B0%E3%81%8C-2-%E3%81%A4%E4%BB%A5%E4%B8%8A%E3%81%82%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AF%EF%BC%91%E3%81%A4%E3%81%AE%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E3%81%97%E3%81%A4%E3%81%A4%E5%BC%95%E6%95%B0%E3%81%AE%E5%90%84%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%AB%E8%AA%AC%E6%98%8E%E3%82%92%E8%B6%B3%E3%81%97%E3%81%9F%E3%81%AA%E3%82%89%E8%B6%B3%E3%81%99)
  - [その他、必要に応じて付与するアノテーション](#%E3%81%9D%E3%81%AE%E4%BB%96%E5%BF%85%E8%A6%81%E3%81%AB%E5%BF%9C%E3%81%98%E3%81%A6%E4%BB%98%E4%B8%8E%E3%81%99%E3%82%8B%E3%82%A2%E3%83%8E%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JSDoc

## React のコンポーネント

## カスタムフックス

### 記載事項

```ts
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

```ts
/**
 * @deprecated 関数で運用すると()の記載が必要なため、定数のMEDIA_QUERY_PCを用意した
 */
export const mediaQueryPc = (style?: StyleType) =>
  mediaQueryMin(threshold[PC], style);
export const MEDIA_QUERY_PC = mediaQueryMin(threshold[PC])();
```

- @example

使用例を記載する場合に使用します。

```ts
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
