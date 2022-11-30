# JSDoc

## React のコンポーネント

### 記載事項

- 使用目的
- - ページコンポーネント以外(ページコンポーネントも特殊な説明が必要な場合は記載可)

- 表示方法の一例
- - 「表示例:」と明記
- - ページコンポーネントも記載

```
ページコンポーネントの場合
/**
 * 表示例: 予約一覧 > AGA、アレルギー > 画像アップロード
 */
export const TelemedicineAffectedArea = () => {
```

```
ページコンポーネント以外
/**
 * 数値の入力に使用
 * 表示例: 予約詳細 > 決済 > 一部のポイントを使用する
 */
export const NumberBoxInput = ({ textBox, props }: CustomInputProps) => (
```

## カスタムフックス

### 記載事項

- 使用目的

```
/**
 * TelemedicineAffectedAreaが長くなったのでロジックを分離
 */
const useTelemedicineAffectedArea = () => {
```

```
/**
 * react-routerのバージョンアップによるエラーを吸収する目的で作成したWrapper
 */
const useHistory = () => {
```

### 必要な場合に付与するアノテーション

- @param
  名称から判断できない特記事項がある場合に記載
  ※ 複数可

- @return
  名称から判断できない特記事項がある場合に記載
  ※ 複数可

```
/**
 * 画像をアップロード
 * @param departmentName 対象となる診療項目
 * @returns uploading アップロード中かどうかを判定
 * @returns onUpload アップロードを実行する関数…引数は のinputFilesと予約ID
 */
export const useUploader = (departmentName?: string) => {
```

## 関数

### 記載事項

- 作成意図や期待動作

### export する場合、もしくは、必要な場合に付与するアノテーション

- @param
- @return

  ※ 複数可

```
/**
 * 一定時間、処理を遅延
 * @param {number} time 待機時間（単位：ミリ秒）
 * @param {number} count 待機回数（単位：回）
 * @return 待機した時間（単位：ミリ秒）
 */
const waitTime =(time:number,count:number) => {
  ...
  return totalWait
}
```

## 変数・定数

- 利用目的(名称から利用目的が明確でない場合に付与)

```
/**
 * - halfModalをpageModalの上に表示させるために用途で作成したhtmlのID
 * - `src/launch/main_contents.tsx`でIDを割り当て
 */
export const HalfModalHighPriorityID = 'half-modal-id-high-priority'
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
