NINJA AIRS CMS Version 20.2.0 COMPLETE

公開ページ:
- index.html

管理画面:
- admin.html

公開URL:
https://ninja326.github.io/NINJAAIRSU15/

管理URL:
https://ninja326.github.io/NINJAAIRSU15/admin.html

Version20.2 完成版・最適化内容:
- 活動イメージ: タイトルは常時表示
- 活動イメージ: カーソルを合わせた時だけ黒透明で説明文全文を表示
- 活動イメージ: カーソルを離すと元画像に戻る
- 閉じるボタンなし
- スマホはタップで説明表示 / 再タップで戻る
- 旧Service Worker / PWAキャッシュ対策を追加
- sw.js をキャッシュクリア専用に更新
- HTMLキャッシュ対策メタタグを追加
- 管理画面・公開画面・READMEのバージョンを20.2.0へ統一

維持している機能:
- Instagram投稿URL対応
- Canva大型バナー自動サイズ調整
- スケジュール5カード
- スケジュールカードLINE相談
- GitHub画像管理
- 画像削除・再読込
- Firebase / Firestore保存
- FAQ / スポンサー / SEO

GitHubへアップロードするファイル:
- index.html
- admin.html
- firebase-config.js
- sw.js
- .nojekyll
- README.txt
- assets フォルダ

アップロード後の確認:
1. GitHub Pages が緑チェックになるまで待つ
2. 管理画面を開く
   https://ninja326.github.io/NINJAAIRSU15/admin.html?ver=20-2
3. 公開ページを開く
   https://ninja326.github.io/NINJAAIRSU15/index.html?ver=20-2
4. Cmd + Shift + R で強制再読み込み

Version20.2 修正内容:
- GitHub TokenをlocalStorageから自動復元
- 保存先 assets/uploads も自動復元
- 旧Tokenキーとの互換性を追加
- Token設定保存後、次回以降も画像管理で自動利用
- 既存機能は削除せず維持
