---
title: Geode集群搭建

date: 

tags: [像蜗牛一样匍匐前进]

categories: Geode
---

# Geode集群搭建
## geode介绍
1. Geode/Gemfire 是Pivotal公司开发的一款开源的、分布式NoSql内存数据库，可用来进行完成分布式缓存，数据持久化，分布式事物、动态扩展等功能。

2. Geode是一个提供实时、一致访问大型分布式云平台下数据密集型应用的数据管理平台。

3. Geode 通过跨多进程，把内存、CPU、网络资源和可选的本地磁盘汇集起来，来管理应用程序对象及其行为。它使用动态复制和数据分片技术，来实现高可用性，改善性能、可伸缩性和容错。Geode 除了是一个分布式数据容器，它还是一个内存数据管理系统，提供了可靠的异步事件通知和有保证的消息传递。

## 基本概念
1. 定位器（Locator）： 提供发现服务和负载均衡服务。您可通过定位器服务列表来配置客户端，定位器管理维护着一个动态成员服务器（server）列表，和链接不同的server。

2. 服务器（server） ： 主要用于托管长期数据区域和运行标准Geode进程，例如客户端/服务器配置中的服务器。服务器（server），可以部署在同一台机器，也可以部署在不同机器。在不同的机器上启动时，需要先用connect连接已启动的locator

3. 区域（region） ：   类似于关系型数据库的表，并且作为“name/value 对”以分布式方式管理数据。复制区域（replicated region）存储着 {分布式系统中每个缓存成员数据的} 相同副本。分区区域（partitioned region）在缓存成员之间传播数据。系统配置之后，客户端应用 {在不了解底层系统架构的情况下} 也可访问区域中的分布式数据。当数据发生改变的时候，您可以定义监听器来接收通知，并且您也可以定义过期条件，来删除区域中的过期数据。

## 集群配置服务的原理
1. 定位器（locator）：一个Geode进程，它告诉新的连接成员正在运行的成员的位置，并为服务器的使用提供负载均衡。默认情况下，定位器启动JMX Manager，该JMX Manager用于监视和管理Geode集群。集群配置服务使用定位器来保持集群配置并将配置分配给集群成员。

2. 服务器（Server）:分为2个级别：集群和组，组级别可以覆盖集群级别的配置

## geode的安装
1. 首先去官网下载你系统所支持的版本压缩包   https://geode.apache.org/

2. 将压缩包解压到指定的文件夹**jdk版本必须是1.8以上**

3. 预先创建好一个工作空间，用于部署定位器和服务器，例如我这里是在创建的是 `D:\geode\leap`目录，

### geode的调试准备
1. 配置文件的更改，找到`geode`解压包的路径,找到`bin`目录下的`leap.properties`配置文件，将下面位置的ip改为自己本机的地址。

    ![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190125095807.png)

2. 将更改后的配置文件，复制到`D:\geode\leap`目录下。

3. 回到`geode`解压包`bin`目录下,按住shift键鼠标右键，点击*在此处打开命令窗口*，进入管理员界面，使用`gfsh`命令进入`geode`管理模式.
    ``` cmd
    D:\自用项目包\projectresource\LEAPV5资源\发布库\V6\geode\apache-geode-1.6.0\bin>gfsh
        _________________________     __
    / _____/ ______/ ______/ /____/ /
    / /  __/ /___  /_____  / _____  /
    / /__/ / ____/  _____/ / /    / /
    /______/_/      /______/_/    /_/    1.6.0

    Monitor and Manage Apache Geode
    gfsh>
    ```
4. 如果没有进入到这个界面，可能是环境变量的问题，可以回去检查java环境变量是否配置。

5. 开始**创建定位器**，并将其部署到指定的工作控件，*locator 定位器，相当于master-slave中的master，或者zookeeper，主要用于管理集群，和链接不同的server*
    ``` cmd
        start locator --name=locator_leap1  --hostname-for-clients=192.168.5.130 --port=30001 --http-service-port=34001 --properties-file=D:/geode/leap/leap.properties --J=-Dp2p.handshakeTimeoutMs=75000  --J=-Djava.net.preferIPv4Stack=true --dir=D:/geode/leap/locator_leap1
    ```
6. 需要注意的是，这里的定位器名字和端口可以自己指定，如果不指定的话一般也可以自动生成，然后接着**创建一个服务器**
    ``` cmd
    start server --name=server_leap1  --hostname-for-clients=192.168.5.130 --server-port=35001  --locators=192.168.5.130[30001]  --initial-heap=1G --max-heap=1G --critical-heap-percentage=95 --eviction-heap-percentage=60 --off-heap-memory-size=3G --critical-off-heap-percentage=95 --eviction-off-heap-percentage=60 --J=-Dgemfire.ALLOW_PERSISTENT_TRANSACTIONS=true --J=-Dp2p.handshakeTimeoutMs=75000 --J=-Djava.net.preferIPv4Stack=true  --properties-file=D:/geode/leap/leap.properties --dir=D:/geode/leap/server_leap1
    ```
7.  `list members`列出创建成功的服务器和定位器

8. 创建一个复制,持久化的区域(`region`:相当于传统数据库的数据表)
    
    `create region --name=regionA --type=REPLICATE_PERSISTENT`

9. 向`region`中添加，查询数据

    `put --region=regionA --key="1" --value="one"`

    `query --query="select * from /regionA" `

10. 查看有关区域的详细信息

    `gfsh>describe region --name=regionA`

11. 开启监控web界面：默认的用户名密码为 `admin`

    `start pulse`

12. 停止服务器

    `stop server --name=server_leap1`

13. 停止集群 

    `shutdown include-locators=true`

14. 导入集群

    `export cluster-configuration --zip-file-name=/home/username/configs/myClusterConfig.zip` 

15. 导出集群

    `import cluster-configuration --zip-file-name=/home/username/configs/myClusterConfig.zip`


### geode其他命令
+ 启动gfhs  `gfsh`
+ 启动定位器        `start locator --name=locatorName`
+ 检查存在的gfsh连接     `describe connection`
+ 从不同的终端连接定位器和JMX管理员   `connect`
+ 断开所有的连接  `disconnect`
+ 从另外的终端连接定位器    `start server --name=server1 --locators=localhost[10334]`
+ 列出所有的成员    `list members`
+ 查看成员详情      `describe  member --name=serverName(locatorName)`
