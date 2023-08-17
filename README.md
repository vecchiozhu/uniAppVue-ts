# uniAppVue-ts
echo "# uniAppVue-ts" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vecchiozhu/uniAppVue-ts.git
git push -u origin main

#### 如果提示'无法读取远程仓库',使用以下命令
git remote rm origin
git remote add origin https://github.com/vecchiozhu/uniAppVue-ts.git
git push -u origin main
