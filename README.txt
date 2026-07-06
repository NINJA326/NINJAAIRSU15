NINJA AIRS CMS 完成版 v13

公開ページ:
- index.html

管理画面:
- admin.html

公開URL:
https://ninja326.github.io/NINJAAIRSU15/

管理URL:
https://ninja326.github.io/NINJAAIRSU15/admin.html

Version 13.0.0 / Build 2026.07.06-IMAGE-SYNC-DELETEFIX

主な修正:
- 画像削除後、リロードなしでカードを即時削除
- GitHub APIの反映遅延で削除済み画像が復活表示されないよう tombstone 制御を追加
- 画像管理タブを開いた時に自動で画像一覧を同期
- ウィンドウをアクティブにした時、画面サイズ変更時にも自動同期
- 管理画面下部にVersion/Buildを表示
- 画像一覧はGitHub APIのdownload_urlを使って安定表示
- 未使用画像選択・一括削除・検索・並び替え・使用箇所表示に対応

重要:
- Firebase Storageは使いません。
- 画像はGitHubの assets/uploads/ に保存します。
- Firestoreには文章と画像URLだけ保存します。
- GitHub Tokenはチャット等に貼らず、管理画面にのみ入力してください。
