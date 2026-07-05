NINJA AIRS CMS v9 GitHub画像自動アップロード版

内容:
- Firebase Storageは使いません
- 画像はGitHubの assets/uploads/ に保存
- Firestoreには画像URLだけ保存
- 管理画面に「画像アップロード」タブを追加
- GitHub Tokenを入力すると管理画面からGitHubへ画像をアップロード可能
- アップロード後、トップ画像・活動内容・活動イメージ・日記・OGPへ反映可能

必要:
1. GitHubで Fine-grained personal access token を作成
2. Repository access: NINJAAIRSU15
3. Permissions: Contents = Read and write
4. 管理画面の「画像アップロード」タブへTokenを入力

注意:
- Tokenはブラウザ上でGitHub API通信に使います。
- 共有PCではTokenを保存しないでください。
- FirestoreにはTokenを保存しません。

公開URL:
https://ninja326.github.io/NINJAAIRSU15/

管理画面:
https://ninja326.github.io/NINJAAIRSU15/admin.html
