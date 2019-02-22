---
title: IEDA+DOCLever操作说明

date: 2019-01-09 17:04:00

tags: [Hexo,Sample]

categories: Hexo
---

# IEDA+DOCLever操作说明
## 一、IEDA下载安装
+ 下载地址: https://www.jetbrains.com/idea/download/
+ 激活码： http://idea.lanyus.com/

## 二、IEDA的使用
### 1.界面
![IDEA](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108150312.png)

### 2.项目准备阶段

#### 2.1环境依赖
    1.maven选择的是3.5.0版本以上的，具体的配置过程如下：
+ 单击IDEA状态栏的file->setting-> 直接在搜索框输入maven，如下图所示

![maven](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108142914.png)

+ 在Maven home directory里面写上你所下载的maven的路径,User setting file是maven下载包中conf下的setting.xml文件，具体的配置如下
>`<localRepository>E:\maven\mavenFactory</localRepository>`

localRepository是本地依赖下载存储的位置,
```
        <mirrors>
             <mirror>   
                 <id>discussGroup</id>   
             <mirrorOf>*</mirrorOf>   
            <url>http://118.112.188.108:9289/nexus/content/groups/discussGroup/</url>
         </mirror>  
```
+ mrrors 是仓库地址镜像设置

+ 这几个设置完成之后，可能会提醒你更新项目的依赖包，这个时候可以先忽略调


    2.JDK1.8 ,这里使用的jdk版本必须是1.8以上

    3.银海插件的使用
+ 同理，还是进入到set界面，找到Plugins界面，在搜索框搜到银海插件,如果有的话可以从本地导入该插件，如下图：
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108150724.png)
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108164108.png)
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108164156.png)

找到本地插件的位置

### 3. 项目构建
- 在构建项目之前，先指定一个位置作为IDAE的工作控件，作为项目的存储位置

#### 一. 新建父项目

1. 依次点击File->Nem->Project,左侧选择Maven,不要勾选Create from archetype选项）,如下图，点击next
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108151436.png)


依次补齐剩下的步骤
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108151728.png)

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108151807.png)

要注意的是在点finish之前看一下项目的路径，放在自己预设的项目工作空间
>**需要注意的是，所有的文件夹都不能使用中文**

#### 二. 新建框架模块
    在父项目下,选择新建模块,Spring Initializr,选中Custom输入如下地址：http://192.168.17.18:8080/cloud/ 或者http://118.112.188.108:9289/cloud/ 然后点next.
 ![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108152310.png)

 ![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108152438.png)
 ![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108152607.png)
 补全包项目的信息，然后点击next界面，这里会有需要用到的依赖选择

#### 三 、功能模块的选择
+ 核心模块全选
+ 组织机构全选
+ 持久化框架选mybatis
+ 缓存类型选ehcache
+ 服务注册选zookeeper
+ 集群同步选cluster
+ 验证码选中
+ 分布式事务不选
+ 字典选中
>    如下所示:

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108153042.png)
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108153102.png)

#### 四 、完成项目创建
        后面按照默认操作，不需要更改，项目创建完成之后，可能会出现报错，这个是犹豫缺少依赖，这个时候，进入maven里面，因为每次都会恢复到默认，需要手动勾选maven配置，然后回到主项目上点右键。
   ![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108153529.png)

项目重新构建，这个时候，会自动下载相关需要用到的依赖。     

>  需要注意的一点是，在父模型的pom.xml文件中，需要导入子模型

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108153825.png)

**在这里创建的smartmodule即为子模块，项目的小模块开发，大部分的已经开发完成**
*****
> 完成maven更新的时候，如果还是出现依赖错误的情况，我们可以先注释掉不需要的依赖

    <artifactId>ta404-component-cachemg</artifactId>
    <artifactId>ta404-component-logmg</artifactId>  
    <artifactId>ta404-module-cluster</artifactId>
    <artifactId>ta404-module-registry-zookeeper</artifactId>

+ 到这里项目构建基本完成

#### 五 、编写一个完成的业务

    1.准备好数据库连接

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108155406.png)  

    2.这里是选择使用oracle，然后进入到DataSource界面

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108162413.png)

    3.填写你需要连接的数据库，输入完成之后，点击test connection测试是否能够连接
    可能会出现的是，没有此按钮在，这说明你没有安装oracle插件，点击driver旁边插件自动下载，下载完成测试是否完成。
 ![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108163050.png)

    4.完成之后你就可以看到数据库里面的数据表
    5.使用银海插件工具，进行代码自动生成
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108164409.png)

    6.在数据库表中，选择任意一个表，右键表名->代码生成工具->代码生成
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108164853.png)

    7.第一次生成的时候出了.xml和.json不勾选，其它都选中，然后勾选禁止提示，这个时候它会自动在test下面自动创建相关文件
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108165458.png) 
    
    8.检查每个文件夹下创建的类是否有问题，或者是有缺失，如果有缺少的话，单独选择重新创建。
    9.mapper映射文件的自动生成，重新进入代码生成界面，其他路径不改，path路径是选择src/main/resources/mapper，然后选择readMapper.xml和writeMapper.xml自动生成sql映射文件。
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108165937.png)

    10.代码生成完成之后，在application-DataSource.yml中完成相关包的扫码
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108170146.png)

##  4. 工程配置说明
### 4.1 配置文件加载顺序
    bootstrap.yml > application.yml > application-*.yaml 如果存在相同的属性,先加载的生效application-datasource.yaml中添加了mybatis的扫描,会加载mapper.xml文件

### 4.2 详细配置说明
    了解项目包路径
 ![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108160007.png)

     1.bootstrap.yml
+   Server.port为项目启动端口号  设置成8081
+   Server.servlet.session.timeout为session失效时间  默认不变
+   context-path: /git  全局上下文  这里看情况而定，这里如果加了上下文，后面的所有的访问路径都需要拼接上/git    

> 2.application.yml
-   ta404.log日志输出配置
-   Ta404.profiles.active 额外加载的配置文件,配置x时,会去自动加载application-x.yaml文件
-   Ta404.validation.customRegex自定义验证规则
-   Ta404.modules.security安全相关配置
-   Ta404.modules.security .permitUrls 无需登录即可访问地址
-   Ta404.modules.security .loginPermitUrls 登陆之后所有角色都可访问地址

> 3. application-datasource.yml
-   Ta404.database.transaction.packageStartCheck事务扫描目录
-   Ta404.database.mybatis.page-dialect分页组件方言
-   Ta404.database.mybatis.datasourceList启用数据源
-   Ta404.database.mybatis.ta404ds框架数据源相关配置
-   Ta404.database.mybatis.ta404ds.mapper框架mapper接口扫描路径
-   Ta404.database.mybatis.ta404ds. type-aliases-package实体类扫描路径
-   Ta404.database.mybatis.ta404ds. mapper-locations框架mapper.xml扫描路径

### 4.3 数据库的配置修改
![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108161449.png)

### 4.4 尝试后台项目启动
+ 创建快捷启动

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108170432.png)

-  当点击debug调试启动，正常启动会显示码表开始加载   码表加载完成，正常启动没有显示错误即为后端部署完成。
- 如果出现异常，具体问题具体分析，可能会忘记扫描自己写的包，会出现问题

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108173637.png)

- 此时可以进入下一个环境，自己写一个增删改查的后端业务，然后在DOCLever工具上进行接口测试。

+ 一般后台的业务是写在rest里面
> 比如我需要写一个插入数据的业务，在test包下面的rest包TatestRestService中

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108191423.png)



******
------
# DOClever 工具类
- DOClever是一个可视化免费开源的接口管理工具 ,可以分析接口结构，校验接口正确性， 围绕接口定义文档，通过一系列自动化工具提升我们的协作效率。DOClever前后端全部采用了javascript来作为我们的开发语言，前端用的是vue+element UI，后端是express+mongodb，这样的框架集成了高并发，迭代快的特点，保证系统的稳定可靠。
- mock 的无缝整合，DOClever 自己就是一个 mock 服务器，当你把接口的开发状态设置成已完成，本地 mock 便会自动请求真实接口数据，否则返回事先定义好的 mock 数据。

## DOCLever 的使用
+ 注册使用
+ DOclever 作为接口管理工具，一般只需创建一个团队，然后在邀请成员进行协同开发测试

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108174131.png)

+ 创建团队成功之后，邀请组员加入，并给组员相应的权限，然后每个人都可以新建接口测试

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108174649.png)

+ 点击`+`号即可以新建接口，名称中英文都可以，简介可以不用填，状态写开发中，请求路径设置为POST，接口名称在后端restService中找，如下图：

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108175121.png)

- 将上图的箭头所指的地方拼接起来，就是接口的路径。前面加斜线表示绝对路径

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108175213.png)

- 在参数里面body中输入接口中所需要的参数，比如我调用的接口是selectOne，该接口是通过name模糊查询表中的所有数据

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108175706.png)

- 在这里测试后端/tadict/tadictRestService!selectOne.do这个接口，看看接口是否有问题，因为测试是后端的接口，没有通过前端，保存上面的创建的接口，保存之后点击允许，**接口路径选择POST， BaseUrl选择MockServer,然后点运行，即可调用后台方法，查询到数据库中的数据，显示在下面的result里面，需要注意的是，我们使用的是内网开发，所以需要打开DOclever右上角中的代理**

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108180251.png)

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190108180310.png)

当状态代码显示的200的时候，即为接口正确无误，此时可以把Result里面的PreView里面的结果复制出来，返回上一步，找到result下面的导入json，**需要注意的是，导入json时，犹豫上面查询的结果里面多了横线，所以我们要把之前的横线都删掉，然后再点确定** 效果如下

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109090612.png)

此时DOCLever会将查询出来的结果显示在Result里面，呈json格式显示出来。


## 前后端交互设计
    前后端分离的原理：后台不再空置页面跳转，前台只发起POST请求，后端只返回json数据

### 交互流程
 一 、dev-mock(前台-Doclever-后台)
+ 前台使用 npm run dev-mock 启动
+ 前台发起一个请求,请求被代理到doclever,如果接口不存在或者接口已完成,则跳转到实际后台地址进行访问
+ 前台发起一个请求,请求被代理到doclever,如果接口是开发中,则直接返回mock数据。
    
二 、dev（前端-后端）启动
+  修改faceConfig.js中的basePath为后台地址,前台使用npm run dev 启动
+  前台发起一个请求,请求直接放问后台实际地址进行访问

三  、请求地址配置说明
- 后台端口,在后端bootstrap.yml中的sever.port中定义

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109094159.png)

- 前台端口,在前端config目录下的index.js中的,module.exports下的port中定义

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109094311.png)

- mock地址,在前端faceConfig.js中的faceConfig下的mockServer中定义
>   mock地址在DOCLever设置中，如下图所示：

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109094056.png)

- 实际后台地址,在前端faceConfig.js中的devServer中定义

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109094533.png)

### 前后端交互的原理
        在前端和后端都运行的时候，浏览器输入前端访问地址：http://127.0.0.1:8080, 此时前台的请求会直接转发到mockServer代理上，然后会在DOCLever上查找改接口是否存在或者是否开发完成，如果正在开发，此时前端的空置台会输出，接口正在开发中，返回mock数据，如果接口开发完成，会直接跳转到后端实际的地址进行访问。

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109100024.png)

        此时浏览器上，当点击登录的时候，前台发起请求：http://127.0.0.1:8080/login.html ,此时前台输出为：

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109100541.png)

    如果此时，我在DOCLever上将接口login.do改成开发中，这个时候控制台中会显示：

![](http://pkzuokcq8.bkt.clouddn.com/myfile/20190109100916.png)

###  交互原理
    主要是RestService的处理,需要继承BaseRestService.
        1.接口前台数据

            //a.通过变量接收
            public void deleteBatchUserByUserIds(String userIds)
            //b.通过对象接收,如果对象中的字段名称匹配成功,则会直接将属性注入
            public void queryBatchUserByOrgId(TaUserOrgKey taUserOrgKey, PageParam pageParam)
            //c.从request中获取
            String checkCode = (String) request.getParameter("checkCode");

        2.返回结果

            返回数据推荐使用框架封装的ResultBean对象,在restservice中步骤如下:
            //a.方法返回类型为void
            public void getConfig(HttpServletRequest request)
            //b.设置数据setData
            setData("configMap",configMap);
            //c.设置异常
            setError("原始密码错误", "error");
            setSuccess(false);

#### 前端交互
    请求统一要求使用this.Base.submit,具体写法如下：
        let submitParam = {
            url:"",  后端的实际访问地址
            data:"",    提交参数
            method:"",  提交方式
            autoValid:  ,   提交前的自动验证   
        };
        let callBack = {
            successCallBack:(data) => {
                请求成功的回调函数
            },
            failCallBack:(data) => {
                请求失败的回调函数
            }
        }
        this.Base.submit(自动验证,submitParam,callBack);
            