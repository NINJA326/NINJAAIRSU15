NINJA AIRS CMS 完成版 v11 Complete

公開ページ:
- index.html

管理画面:
- admin.html

公開URL:
https://ninja326.github.io/NINJAAIRSU15/

管理URL:
https://ninja326.github.io/NINJAAIRSU15/admin.html

重要:
- Firebase Storageは使いません。
- 画像はGitHubの assets/uploads/ に保存します。
- Firestoreには文章と画像URLだけ保存します。
- Firestore 1MB制限に画像で引っかからない構成です。

Version11 Complete 追加内容:
- Googleフォト風の画像管理画面
- 大きなサムネイル表示
- 選択した写真のプレビュー
- ドラッグ&ドロップアップロード
- 同じファイル名の上書き保存
- 未使用画像の自動検出
- 一括選択・一括削除
- 使用箇所表示
- URLコピー
- 拡大表示モーダル
- 検索・並び替え・使用中/未使用フィルター
- GitHubとの同期
- 画像管理から各編集欄へ「この画像を使用」
- 旧Base64データと旧文字列データの自動変換
- トップ画像・活動内容・活動日記・活動イメージ・スポンサー画像の形式統一

GitHubへアップロードするファイル:
- index.html
- admin.html
- firebase-config.js
- README.txt
- assets フォルダ（既存のまま）

画像アップロード:
1. GitHubでPersonal Access Tokenを作成
2. 権限は対象リポジトリ NINJA326/NINJAAIRSU15 の Contents Read/Write のみにする
3. 管理画面 > 画像管理 > GitHub Token に貼る
4. Token設定を保存
5. GitHubと同期
6. 画像をドラッグ&ドロップしてGitHubへアップロード

注意:
Tokenは秘密情報です。チャットやスクリーンショットには表示しないでください。
