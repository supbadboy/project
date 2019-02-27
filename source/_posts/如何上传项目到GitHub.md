---
title: 如何上传项目到GitHub
date: 2019-02-22 16:18:47
tags: [技术]
categories: Hexo
---

## _如何上传文件到GitHub_

作为一个程序员，我们在工作的过程中会遇到很多的问题，和要学习很多新的东西，但是随着时间的推移，我们可能会再次遇到相同的问题或者要使用新的技术，但是时间久了，忘记这事必然的。所以我们可以将我们平时积累的东西一点一点的搬到网络上，对于程序员来说，GitHub肯定就很熟悉了。所有，这边文章就是介绍如何将项目或者文件上传到Github上面。

### 准备工作
####  1.  需要注册一个Github账号

+ GitHub官网地址：https://github.com

+ 注册的话可以不用一一举例了，按照提示来。需要注意的是，此时注册的邮箱和用户名是后面很多地方必须要记住的，所以注册的时候不要太随意。

![](https://raw.githubusercontent.com/supbadboy/image/master/20190222163218.png)

+ 这是注册成功之后的界面，一般你注册成功会提醒你创建仓库`repositores` 创建仓库的时候，按照默认的创建

![](https://raw.githubusercontent.com/supbadboy/image/master/20190222163428.png)

+ 后面的不是必填，作为新手建议写一下说明，介绍一下这个仓库的用途。选择public公开的库，私有的库一般是要收费的。然后点`create repository`，即可完成仓库的创建

![](https://raw.githubusercontent.com/supbadboy/image/master/20190222163749.png)

仓库创建成功会进入这个界面，提醒你上传文件或者是新建文件。这里的上传文件可以直接把文件往里面拖，但是有局限性。文件夹比较多的不能通过这种方式上传，所以作为程序员的我们，还是通过代码的方式上传项目。


####  2. git工具的准备

+  git的下载地址： https://git-scm.com/downloads  根据自己的电脑选择下载的格式。 然后以管理员的身份安装此文件，按照默认的方法安装，安装成功后会在电脑的开始处 出现  git文件

![](https://raw.githubusercontent.com/supbadboy/image/master/20190222164710.png)


#### 3. 开始项目上传

+ 1.文件上传有两种方式，第一种创建一个git文件夹，用于存放需要上传的项目，第二种，直接上传项目所在地。
+ 2.进入项目所在位置，鼠标单击右键，选择` Git Bash here` ，然后会进入git的管理界面

![](https://raw.githubusercontent.com/supbadboy/image/master/20190222165331.png)

+ 3.初始化该项目，并将项目交给git管理。
```
     git init 
```
+ 4.输入` git add . `将该项目或文件夹下的所有文件添加到`git`中
```
     git add .
```

![](https://raw.githubusercontent.com/supbadboy/image/master/20190222165918.png)


+ 5.输入`git commit -m "提交信息"`
```
     git commit -m "提交信息  
```
![](https://raw.githubusercontent.com/supbadboy/image/master/20190222165948.png)
    
+ 6.连接你的guthub仓库，这里的地址即是你的GitHub仓库地址
```
     git remote add origin https://github.com/supbadboy/Test.git
```
+ 7.然后开始提交
```
     git push -u origin master
```
+ 8.到这里的时候开始进入等待，因为github服务器在国外，国内访问可能会比较慢，大概一分钟左右会弹出窗口让你输入你github的用户名密码，确认之后就开始进入文件上传。
![](https://raw.githubusercontent.com/supbadboy/image/master/20190222170446.png)

这是提交成功的界面。