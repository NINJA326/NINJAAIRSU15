NINJA AIRS Firebaseログイン管理付きサイト

【入っているもの】
- index.html：公開ホームページ
- admin.html：管理画面（ログイン必須）
- firebase-config.js：Firebase設定ファイル
- firestore.rules：Firestoreセキュリティルール
- storage.rules：Storageセキュリティルール
- assets/：初期画像・ロゴ

【できること】
- 公開サイトは誰でも閲覧可能
- admin.html はFirebase Authでログイン
- 管理者メールのみ編集可能
- 活動イメージ5枚の写真を管理画面から差し替え
- トップコピー、説明文、LINE URL、メールアドレスを変更

【初回設定】
1. Firebaseでプロジェクトを作成
2. Authentication → メール/パスワードを有効化
3. Authentication → Users で管理者ユーザーを作成
4. Firestore Database を作成
5. Storage を作成
6. firebase-config.js にFirebase設定を貼り付け
7. firebase-config.js の ADMIN_EMAILS に管理者メールを入れる
8. firestore.rules と storage.rules の your-email@example.com を管理者メールに変更
9. Firebase Hosting またはNetlify等にアップロード

【注意】
- firebase-config.js は公開されても問題ない設計ですが、Firestore/Storage Rulesで必ず書き込み制限してください。
- 管理画面のURLを知っていても、管理者メールでログインしない限り保存できない設計です。
