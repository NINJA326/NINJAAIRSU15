NINJA AIRS CMS 完成版 v12

公開ページ: index.html
管理画面: admin.html

主な改善:
- 画像管理をGoogleフォト風に強化
- 大きなサムネイル表示
- ドラッグ&ドロップアップロード
- 同じファイル名は上書き保存
- 未使用画像の自動検出
- 一括削除
- 使用箇所表示
- URLコピー
- 拡大表示
- 検索・並び替え
- GitHubとの同期

保存方式:
- Firebase Storageは使いません
- 画像はGitHub assets/uploads/ に保存
- Firestoreには文章と画像URLだけ保存

GitHubへアップロードするファイル:
- index.html
- admin.html
- firebase-config.js
- README.txt
- assets フォルダ
