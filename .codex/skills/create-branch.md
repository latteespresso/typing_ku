---
name: create-branch
description: チーム標準ルールでブランチを作成する
---

# create-branch

1. `prefix` をユーザーに確認する。  
   許可される値は `feature` / `bugfix` / `hotfix` / `docs` のみ。  
   入力がない場合は必ず質問する。  
   無効な値の場合は、許可される prefix を提示して再入力を依頼する。

2. `issue番号` をユーザーに確認する。  
   数値のみ許可する。  
   入力がない場合は必ず質問する。  
   数値以外が含まれる場合は、数字のみの例を示して修正提案する。

3. 変更内容の短い英語タイトルを作成し、`kebab-case` に正規化する。  
   - 小文字英字・数字・ハイフンのみを使う  
   - 空白と `_` は `-` に置換する  
   - 連続ハイフンは 1 つにする  
   - 先頭末尾のハイフンは削除する  
   タイトル入力が不足している場合は必ず質問する。  
   `kebab-case` でない場合は修正版を提案して確認する。

4. ブランチ名を次の形式で生成する。  
   `<prefix>/<issue-number>-<kebab-title>`  
   例:  
   `feature/1234-add-login-validation`  
   `bugfix/4321-fix-null-error`

5. 生成ブランチ名が命名規則に違反していないか最終検証する。  
   検証観点:  
   - prefix が許可値か  
   - issue番号が数値か  
   - タイトルが `kebab-case` か  
   違反があれば、修正後のブランチ名を提案してから続行する。

6. `main` にチェックアウトする。  
   `git checkout main`

7. `main` を最新化する。  
   `git pull`

8. 生成したブランチ名でブランチを作成する。  
   `git checkout -b <生成ブランチ名>`

9. 作成結果を表示する。  
   `git branch --show-current` の結果を示し、作成されたブランチ名を明示する。
