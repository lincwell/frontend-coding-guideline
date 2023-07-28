### UX / Accessibility

TODO: React の話から逸れそうだから分けたほうがいいかも

- ユーザーのアクションに対して常に適切なフィードバックを用意する。
  - API の実行結果で表示を分ける。
  - 時間のかかる処理を行う場合、ローディングアイコンを表示する。
- Layout Shift を可能な限り避ける。

- 画像に対しては常に `alt` 属性をつける。[An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) ([日本語訳](https://qiita.com/hibikikudo/items/f710933664094632540d))
- 適切に aria や `role` 属性を付与する。
- 適切なセマンティクスで記述する。
