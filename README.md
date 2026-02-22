# くうのタイピングハウス

AWS Amplify Hosting でそのまま公開できる、ビルド不要の静的 Web アプリです。

## ローカル確認
`index.html` をブラウザで開くだけで動作します。

## Amplify Hosting へのデプロイ
1. このフォルダを GitHub / CodeCommit / GitLab に push
2. AWS Amplify Console で `Host web app` を選択
3. リポジトリとブランチを接続
4. ビルド設定はリポジトリ内の `amplify.yml` を使用
5. `Save and deploy` を実行

## 構成
- `index.html`: 画面構造
- `style.css`: デザイン
- `app.js`: タイピングゲームロジック
- `amplify.yml`: Amplify 用ビルド設定
