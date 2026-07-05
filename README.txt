NINJA AIRS CMS 最終版 v6（Firebase Storage対応）

公開ページ:
- index.html

管理画面:
- admin.html

管理画面URL:
https://ninja326.github.io/NINJAAIRSU15/admin.html

重要な変更:
- 画像はFirebase Storageへ保存します。
- Firestoreには画像URLと文章だけを保存します。
- Firestore 1MB制限で保存できない問題を解消します。

必要なFirebase設定:
1. Authentication > ログイン方法 > メール/パスワードを有効化
2. Authentication > 設定 > 承認済みドメインに ninja326.github.io を追加
3. Firestore Databaseを作成
4. Firestore > ルールに firestore.rules の内容を貼り付けて公開
5. Storageを有効化
6. Storage > ルールに storage.rules の内容を貼り付けて公開

アップロード方法:
ZIPを解凍し、中身をGitHubへ上書きアップロードしてください。

主な機能:
- トップ画像スライドショー
- 画像拡大・横位置・縦位置調整
- スタッフ募集・スポンサー募集の改行反映
- スケジュール管理
- 活動日記
- FAQ
- SEO設定
- アクセス数表示
- Firebase Storage画像保存
