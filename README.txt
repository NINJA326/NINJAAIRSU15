NINJA AIRS CMS Version 9 - GitHub画像自動アップロード版

公開ページ:
- index.html

管理画面:
- admin.html
- https://ninja326.github.io/NINJAAIRSU15/admin.html

特徴:
- Firebase Storageは不要です。
- 画像はGitHubの assets/uploads/ に保存します。
- Firestoreには画像URLと文章だけを保存します。
- Firestoreの1MB制限に引っかからない構成です。
- 管理画面に「画像管理」タブを追加しています。
- GitHub Tokenを入れると、管理画面から画像を直接GitHubへアップロードできます。
- トップ画像、活動内容、活動日記、活動イメージ、スポンサー画像にURLを設定できます。
- 画像ごとに拡大率・横位置・縦位置を調整できます。
- 文章の改行表示に対応しています。

アップロード方法:
1. ZIPを解凍します。
2. 中身をGitHubリポジトリ NINJAAIRSU15 に上書きアップロードします。
3. GitHub Pagesの反映を待ちます。
4. 管理画面を開き、Command + Shift + R で強制更新します。

GitHub Tokenについて:
- GitHubの Settings > Developer settings > Personal access tokens から作成します。
- repository contents の read/write 権限が必要です。
- TokenはブラウザのlocalStorageに保存されます。公開サイトには保存されません。

画像URL例:
https://ninja326.github.io/NINJAAIRSU15/assets/uploads/slide-01.jpg
