---
name: create-pr-with-label
description: PRを作成してブランチ名からラベルを付与する
---

# create-pr-with-label

1. 現在のブランチ名を取得する。  
   `branch=$(git branch --show-current)`

2. PR の有無を確認し、存在しなければ作成する。  
   `gh pr view >/dev/null 2>&1 || gh pr create --fill`

3. ブランチ名の prefix から付与ラベルを判定する。  
   - `feature/*` -> `enhancement`  
   - `bugfix/*` -> `bug`  
   - `hotfix/*` -> `urgent`  
   - `docs/*` -> `documentation`  

   例:
   ```bash
   label=""
   case "$branch" in
     feature/*) label="enhancement" ;;
     bugfix/*)  label="bug" ;;
     hotfix/*)  label="urgent" ;;
     docs/*)    label="documentation" ;;
   esac
   ```

4. 判定したラベルが空でなければ、現在の PR のラベル一覧を取得して重複チェックする。  
   例:
   ```bash
   if [ -n "$label" ]; then
     labels=$(gh pr view --json labels --jq '.labels[].name')
     echo "$labels" | rg -Fxq "$label" || gh pr edit --add-label "$label"
   fi
   ```

5. ラベル付与後、確認のため PR 情報を表示する。  
   `gh pr view --json url,title,labels --jq '{url, title, labels: [.labels[].name]}'`
