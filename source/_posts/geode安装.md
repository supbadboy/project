---
title: geode的安装部署

date: 

tags: [Hexo,Sample]

categories: Hexo
---

###  1.更换lib包和resourcelib包第一个此异常

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190122101508.png)

解决方式，更换原有项目的leap.xml文件和web.xml文件

### 2.更换配置文件之后的异常

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190122101802.png)

+ 推测原因是没有安装geode,尝试方法一，注释集群配置

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190122101857.png)

    该方法无效，依旧报错。

+ 尝试方法二  
### 下载安装geode

    解压安装包，并进入bin目录 将bin目录下leap.properties复制到项目将要部署的路径  我这里是 D:/geode/leap 复制到该目录下         
    按住shift+鼠标右键，选择进入命名管理工具
    先输入gfsh命令  ，然后依次执行以下命名   
    **hostname-for-clients和properties-file 设置为自己的路径**


```js
    start locator --name=locator_leap1  --hostname-for-clients=192.168.5.130 --port=30001 --http-service-port=34001 --properties-file=D:/geode/leap/leap.properties --J=-Dp2p.handshakeTimeoutMs=75000  --J=-Djava.net.preferIPv4Stack=true --dir=D:/geode/leap/locator_leap1

    configure pdx --disk-store

    start server --name=server_leap1  --hostname-for-clients=192.168.5.130 --server-port=35001  --locators=192.168.5.130[30001]  --initial-heap=1G --max-heap=1G --critical-heap-percentage=95 --eviction-heap-percentage=60 --off-heap-memory-size=3G --critical-off-heap-percentage=95 --eviction-off-heap-percentage=60 --J=-Dgemfire.ALLOW_PERSISTENT_TRANSACTIONS=true --J=-Dp2p.handshakeTimeoutMs=75000 --J=-Djava.net.preferIPv4Stack=true  --properties-file=D:/geode/leap/leap.properties --dir=D:/geode/leap/server_leap1

    start server --name=server_leap2  --hostname-for-clients=192.168.5.130 --server-port=35002  --locators=192.168.5.130[30001]  --initial-heap=1G --max-heap=1G --critical-heap-percentage=95 --eviction-heap-percentage=60 --off-heap-memory-size=3G --critical-off-heap-percentage=95 --eviction-off-heap-percentage=60 --J=-Dgemfire.ALLOW_PERSISTENT_TRANSACTIONS=true --J=-Dp2p.handshakeTimeoutMs=75000 --J=-Djava.net.preferIPv4Stack=true  --properties-file=D:/geode/leap/leap.properties --dir=D:/geode/leap/server_leap2

    gfsh>deploy --jar=D:\自用项目包\projectresource\LEAPV5资源\发布库\V6\geode\apache-geode-1.6.0\leaplitions2.jar
```
+ 可能出现的问题   
    要注意的是，每一个定位器，端口必须是唯一的，IP地址为自己本机地址





