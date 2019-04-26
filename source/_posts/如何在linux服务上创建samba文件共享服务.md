---
title: 如何在linux服务上创建samba文件共享服务
date: 2019-04-17 17:53:29
categories: 
- Linux相关
tags: 
- Linux
---

## 在Linux中samba共享文件的创建

### 1 准备工作
- 虚拟机或服务器 centos6.8  
- 物理机 windows系统 （访问端）

### 2 安装步骤

1. 检查Linux系统上是否有samba相关的软件包,在终端中输入以下指令

    `rpm -qa | grep 'samba' `

2. 如果查询到如下列表,说明先关服务已经安装
``` linxu
samba-3.6.9-151.el6.x86_64                            
//服务器端软件，主要提供samba服务器的守护程序，共享文档，日志的轮替

samba-common-3.6.9-151.el6.x86_64               
//主要提供samba服务器的设置文件与设置文件语法检验程序testparm

samba-client-3.6.9-151.el6.x86_64                    
//客户端软件，主要提供linux主机作为客户端时，所需要的工具指令集
```
![](https://raw.githubusercontent.com/supbadboy/image/master/20190416113005.png)

3. 如果没有安装的话，可以执行以下代码进行安装

    `yum -y install samba samba-common samba-client`

4. 安装成功之后，系统会生成服务的配置文件和相关的指令
```
    /etc/samba/smb.conf   //是samba服务的主配置文件

    /etc/init.d/smb       //是samba的启动/关闭文件
```

  ![](https://raw.githubusercontent.com/supbadboy/image/master/20190416113746.png)

5. 查看samba的服务状态，如果现实找不到smb服务可能是缺少samba主程序包



+  尝试安装samba包 `yum install -y samba`,安装之后如果还是现实找不到`samba`服务，那么可能是指令有问题，进入 `/etc/init.d/`目录下找与`samba`相关的文件

![](https://raw.githubusercontent.com/supbadboy/image/master/20190416114853.png)

6. 其他都没有问题的时候，可以开始添加samba用户，然后进去config中进行配置文件修改

    `useradd  longrise` 

    `smbpassword -a longrise`

7. 剩下的就是主要配置文件了 如果添加的用户名名为`test`，在配置中的`Global`部分添加 `security= test`  配置文件如下

![](https://raw.githubusercontent.com/supbadboy/image/master/20190417100755.png)

8. 所有的完成之后，关闭防火墙，重启`smb`服务

    `service iptables stop`  关闭防火墙
 
    `service smb restart`  重启项目

9. 在windows系统上开始连接测试，在运行命令中舒服服务系的ip

    `\\127.12.12.12` 进行远程访问服务器文件，可进行基本的读写

![](https://raw.githubusercontent.com/supbadboy/image/master/20190417100254.png)


### 3 相关代码指令

`service smb status/stop/start/restart` smb服务的状态开启停止重启

`service iptables stop/start`     linux防火墙关闭指令

`useradd  name`     往smb服务添加用户

`smbpassword -a name`   给用户设置密码

`grep -v "#" /etc/samba/smb.conf |grep -v "^$"` 只显示没有注释部分的配置

`rpm -qa |grep 'samba'` 查找和samba相关的服务

`cat /etc/passwd`   查看所有的用户和密码（不过密码一般都是不显示的）

`cat /etc/passwd |grep username` 查看指定用户的信息 


