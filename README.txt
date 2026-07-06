NINJA AIRS CMS Version 16.0.0

再構築版です。

アップロードするファイル:
- index.html
- admin.html
- firebase-config.js
- firestore.rules
- storage.rules
- assets フォルダ

修正内容:
- Version表示を上部・下部で16.0.0に統一
- 旧日付スケジュールデータを自動的に5カード週間スケジュールへ変換
- 公開サイトは火・水・木・金・土日祝の5カード表示
- 顔アイコンなしのシンプル＋少しポップなデザイン
- 管理画面のスケジュールタブで5カードを編集可能
- GitHub画像管理・削除即反映・自動同期対応

反映確認:
1. GitHubに中身を丸ごと上書きアップロード
2. Actionsが緑になったら公開サイトを Ctrl/Command + Shift + R で再読み込み
3. 管理画面タイトルと下部が Version 16.0.0 なら更新完了
