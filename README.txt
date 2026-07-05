NINJA AIRS CMS 最適化版

変更内容:
- TOPロゴ横の「NINJA AIRS U15」から U15 を削除し「NINJA AIRS」に変更
- 「NINJA AIRSは、勝つためだけのチームではありません。」を削除し、見出しを変更
- FAQの「初心者でも参加できますか？」を削除
- 活動内容3項目を画像・タイトル・説明文・アイコン編集対応
- DIARY/活動日記を編集対応
  - 日付
  - タイトル
  - 本文
  - 画像挿入・差し替え
  - 追加・削除
- 活動イメージ5枚を画像差し替え対応
- LINEリンクは直接LINEへ遷移
- Firebase設定済み

アップロード方法:
GitHubの既存リポジトリ NINJAAIRSU15 に、このZIPの中身を上書きアップロードしてください。

管理画面:
https://ninja326.github.io/NINJAAIRSU15/admin.html

公開サイト:
https://ninja326.github.io/NINJAAIRSU15/

Firebaseで必要な設定:
1. Authentication > ログイン方法 > メール/パスワード を有効化
2. Firestore Database を作成
3. Storage を作成
4. firestore.rules の内容を Firestore ルールへ貼り付けて公開
5. storage.rules の内容を Storage ルールへ貼り付けて公開
6. Authentication > Settings > 承認済みドメイン に ninja326.github.io を追加

- メールアドレス: xxxmastsxxx@gmail.com
