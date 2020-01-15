

**取消当前进程**

```shell
git rebase --abort
```

**克隆文件**

```shell
git clone gitaddress
```

**查看有哪些分支**

```shell
git branch
```

**看所有分支**

```shell
git branch -a
```

**新建分支**

```shell
git branch dev1
```

**切换分支**

```shell
git checkout dev1
```

**基于远程 master 分支切出一个新分支**

```shell
git checkout -b new_feature origin/master
```

**当对文件做了修改 但是又发现自己的修改有问题 就使用这个命令 退回到版本库上的版本**

```shell
git checkout -- file
```

**将文件提交到缓冲区**

```shell
git add .
```

**提交文件**

```shell
git commit -m 'message'
```

**修正上一次提交**

```shell
git commit --amend
```

**推送到远程, 分支为 master**

```shell
git push origin master
```

**如果当前分支与多个主机存在追踪关系，则可以使用-u 选项指定一个默认主机，这样后面就可以不加任何参数使用 git push**

```shell
git push -u origin master
```

**强制 push**

```shell
git push origin branch1 -f
```

**查看整个项目的提交日志 **

```shell
git log
```

**查看某个特定文件的提交日志**

```shell
git log -- file
```

**图形方式 查看文件**

```shell
gitk
```

**查看整个项目的提交日志**

```shell
git reflog
git reflog --file
```

**回退到特定版本**

```shell
git reset -hard afdafd(版本号)
```

**比较当前文件和暂存区文件差异 git diff**

```shell
git diff <file>
```

**比较两次提交之间的差异**

```shell
git diff <id1><id1><id2>
```

**在两个分支之间比较**

```shell
git diff <branch1> <branch2>
```

**比较暂存区和版本库差异**

```shell
git diff --staged
```

**比较暂存区和版本库差异**

```shell
git diff --cached
```

**显示**

```shell
git show
```

**配置 git**

```
$ git config –global user.name “github’s Name”
$ git config –global user.email “github@xx.com”
$ git config –list
```

**输入错误的用户名和密码**

```shell
git config --system --unset credential.helper
```

**出现异常 提交不了 **

```
unset SSH_ASKPASS
```

```shell
git cherry-pick c1 c2 c3
```
