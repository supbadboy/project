#### 如何通过`git`提交代码避免出现冲突

1. 查看本地代码提交的记录

    `git status`
    
2. 缓存本地更改的文件，避免拉取最新文件时候，本地文件被覆盖

    `git stash`
    
3. 拉取最新版本代码到本地

    `git push --rebase`

4. 缓存的本地文件和拉取新的代码合并

    `git stash pop`
    
5.  确认有无冲突代码，有冲突先解决，然后再准备提交

    `git add .`
    
6. 提交并添加备注，做了什么修改或者更新

    `git commit -m " push new code "` 
    
7. 上传到码云

    `git push origin master`
    
    
    