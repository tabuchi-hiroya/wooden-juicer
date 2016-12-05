# スタティックサイトジェネレータ風テンプレート


## はじめに

スタティックサイトの環境構築のテンプレート。
gulpを駆使して自動化してみた。
環境構築の時間を削減して効率化を図る試み。

## 言語一覧

### HTML
  * HTML
  * pug（初期設定）

### CSS
  * SCSS（初期設定）
  * SASS
  * PostCSS

### JavaScript
  * ES5（初期設定）
  * ES2015
  * TypeScript

※上記に関するパッケージをpackage.jsonにすべて記述してあるので、容量が気になる場合は不要な部分を削除する。


## 初期導入
1. `git clone git@github.com:tabuchi-hiroya/static-site-boilerplate.git`
2. 「static-site-boilerplate」ディレクトリの名前をプロジェクト名に適宜変更
3. `cd プロジェクト名`
4. `/gulpfile.js/config.json`を開き使用したい言語を選択
5. 使用しないディレクトリ・ファイルを削除
6. 【任意】使用しない言語のデータを削除
  * `package.jsonのdevDependencies`の不要なパッケージ
    * 以下の`/gulpfile.js/tasks/の以下ファイルの使用しない言語部分`を確認しながら削除
  * `/gulpfile.js/tasks/`の以下ファイルの使用しない言語部分
    * html.js
    * css.js
    * js.js
7. `npm i`
8. 必要に応じてパッケージをインストール
  * `npm i -D パッケージ名`
9. 必要に応じてタスクを追加
  * `/gulpfile.js/tasks/`内に追加


## 使い方

| タスク  | コマンド        |
| ------- | -------------- |
| 監視    | npm run gulp   |
| 確認    | npm run server |
| CSS整形 | npm run comb   |
