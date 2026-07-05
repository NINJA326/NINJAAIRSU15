NINJA AIRS CMS 完成版 v11

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
- そのため Firestore 1MB制限に画像で引っかかりません。

画像アップロード:
1. GitHubでPersonal Access Tokenを作成
2. 権限は対象リポジトリ NINJA326/NINJAAIRSU15 の Contents Read/Write のみにする
3. 管理画面 > 画像管理 > GitHub Token に貼る
4. Token設定を保存
5. 画像をドラッグ&ドロップしてGitHubへアップロード

アップロード先:
assets/uploads/

管理画面でできること:
- 基本情報編集
- トップ画像スライドショー編集
- 活動内容編集
- 活動日記編集
- 活動イメージ編集
- スケジュール編集
- FAQ編集
- スポンサー募集・スポンサー一覧編集
- SEO編集
- 画像の拡大率・横位置・縦位置調整
- 画像管理からGitHubへ直接アップロード

GitHubへアップロードするファイル:
- index.html
- admin.html
- firebase-config.js
- assets フォルダ
- README.txt


Version11 修正内容:
- 旧Base64文字列データを読み込み時に自動変換して管理画面エラーを防止
- トップ画像・活動内容・日記・活動イメージ・スポンサー画像の保存形式をURLオブジェクトへ統一
- 選択した写真のプレビュー表示を追加
- GitHubアップロード後の写真一覧プレビューをdownload_urlで安定表示
- URLコピー・表示ボタンを追加
- Firestoreには画像本体ではなくURLだけ保存
