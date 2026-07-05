NINJA AIRS CMS v8 Free GitHub Images

目的:
- Firebase Storageを使わない無料運用版です。
- 画像本体はGitHubの assets/uploads/ に保存します。
- Firestoreには画像URLと文章だけを保存します。
- Firestore 1MB制限にかかりにくい構成です。

公開ページ:
- index.html

管理画面:
- admin.html
- https://ninja326.github.io/NINJAAIRSU15/admin.html

画像の追加方法:
1. GitHubリポジトリで assets/uploads/ フォルダを開く
2. Add file → Upload files
3. 画像をアップロードして Commit changes
4. 画像URLを作る
   例: assets/uploads/slide-01.jpg
   または: https://ninja326.github.io/NINJAAIRSU15/assets/uploads/slide-01.jpg
5. 管理画面の画像URL欄に貼り付け
6. 拡大率・横位置・縦位置を調整
7. 公開サイトへ保存

注意:
- 管理画面から画像ファイルを直接アップロードする機能はありません。
- Firebase Storageが無料プランで使えないため、GitHubへ画像を手動アップロードする方式です。
- GitHub Pagesへ反映されるまで1〜3分かかることがあります。
- 反映されない場合はブラウザで Command + Shift + R を押してください。

必要なFirebase設定:
1. Authentication > メール/パスワードを有効化
2. Authentication > 承認済みドメインに ninja326.github.io を追加
3. Firestore Databaseを作成
4. Firestoreルールに firestore.rules の内容を貼り付けて公開

