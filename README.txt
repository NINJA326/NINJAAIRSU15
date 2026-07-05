NINJA AIRS CMS Version 8 Final

重要:
- 画像はFirebase Storageへ保存します。
- Firestoreには画像URL・拡大率・位置情報だけを保存します。
- 以前の「Document exceeds the maximum allowed size」エラーを避ける構成です。

公開ページ:
- index.html

管理画面:
- admin.html
- URL: https://ninja326.github.io/NINJAAIRSU15/admin.html

アップロード方法:
1. ZIPを解凍
2. 中身をすべてGitHubの NINJAAIRSU15 に上書きアップロード
3. GitHub Pagesのデプロイ完了を待つ
4. 管理画面で Command + Shift + R

Firebase設定:
1. Authentication > ログイン方法 > メール/パスワードを有効化
2. Authentication > 設定 > 承認済みドメインに ninja326.github.io を追加
3. Firestore Databaseを作成
4. Firestore > ルールに firestore.rules を貼り付けて公開
5. Storageを有効化
6. Storage > Rules に storage.rules を貼り付けて公開

主な機能:
- トップスライドショー
- Firebase Storage画像保存
- 画像拡大・横位置・縦位置調整
- ドラッグ位置調整
- スタッフ募集改行対応
- スポンサー募集編集・改行対応
- 活動内容、活動日記、活動イメージ編集
- スケジュール、FAQ、SEO編集
- アクセス数表示
- 既存デザイン維持
