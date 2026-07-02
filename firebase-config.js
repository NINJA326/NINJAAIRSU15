// Firebase設定ファイル
// Firebaseコンソールで取得した設定をここに貼り付けてください。
// このままではログイン・保存は動きません。公開サイトの表示はできます。

export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// 管理者として許可するメールアドレス
export const ADMIN_EMAILS = [
  "your-email@example.com"
];
