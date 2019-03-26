---
title: java面试基础部分;
date: 2019-03-25 11:43:02
categories: 
- java面试相关
tags:
- 技术文档 
- 面试
---

### 1. java的四大基础特征

#### 1*.抽象（一般没有提）

 父类为子类提供一些属性和行为，子类根据业务需求实现具体的行为;

 抽象类使用`abstract`进行修饰，子类需要实现父类的所有抽象方法，否则子类也是抽象类。

 #### 2.封装

 把对象的数据或者行为（方法）整合中一个独立的整理，并尽可能的隐藏对象的内部实现细节;

 我们一般隐藏该方法的形式是使用`private`修饰，并通过`get`和`set`方法对外提供访问接口。

#### 3.继承
 子类继承父类的属性和方法，并可以根据自己的需求扩展出新的属性或者功能，提高代码的复用性。

 *java*`的继承是通过`extends`关键字实现的，没继承的类叫父类，继承的类称为子类。子类拥有父类的属性和特征，并可以进行扩充。
 
`overide`：当子父类出现相同的方法，会先运行子类的方法

 重新的特点：**方法名一样，访问修饰符权限不小于父类，返回类型一致，返回参数列表相同**

#### 4.多态
 不修改程序的代码就可以改变程序运行时所绑定的具体代码，让程序可以选择多种运行状态，具体的实现方式：接口实现，继承父类进行方法重写，同一类的中方法的重载。

 封装和继承都是为java语言的多态提供支撑，多态存在的三个必要条件是：继承，重写，父类引用指向子类。

 ### 2. Servlet
 
 #### 1. servlet 是什么？
 `servlet`称为小服务程序或者服务连接器，用java编写的服务器端程序，具有独立的平台协议特性，主要功能是在于交互式浏览和生成数据，生成动态`web`内容。

 #### 2. servlet的生命周期是什么？
  服务器启动时， （`web.xml`中配置 `load-on-startup=0`,默认为0)，或者第一次请求该`servlet`时，就会初始化一个Servlet对象，初始的时候会执行`init(ServletConfig conf)`，该`servlet`对象去处理所有客户端请求，在`servlet(ServletRequest req ,ServletResponse res)`方法中执行，最后服务器关闭时，才会毁掉这个`servlet`对象，执行`destroy`方法。

  ![](https://raw.githubusercontent.com/supbadboy/image/master/20190325200538.png)

  #### 3. servlet中几个比较重要的对象


  **`servletConfig`对象**


获取方式 ： `getServletConfig()` 

功能：
+ `getServletName()`,获取web.xml中配置的`Servlet-name`;
- `getServletContext()`,获取`ServletContext`对象;
+ `getInitParameter(String)`,获取在servlet中初始化参数的值;
- `getInitParameterNames()`,获取在Servlet中所有初始化参数的名字，也就是key值.

**`ServletContext`对象**

获取途径：`getServletContext(); 、getServletConfig().getServletContext()`;

功能：

1. `web`项目中共享数据，`getAttribute(String name)、setAttribute(String name, Object obj)、removeAttribute(String name)`;

2. 整个`web`项目初始化参数,`getInitPatameter(String name)`,通过指定名称获取初始化`getInitParameterNames()`获得枚举类型.

3. 获取web项目资源
- 获取web项目下指定资源的路径：`getServletContext().getRealPath("/WEB-INF/web.xml")`.
- 获取web项目下指定资源的内容，返回的是字节输入流。`InputStream getResourceAsStream(java.lang.String path)`.
- `getResourcePaths(java.lang.String path)`  指定路径下的所有内容

**request对象和response对象我们就比较熟悉了，所以不一一列举了**

### 3. JSP的标签

#### 3.1 El(表达式语言，EL表达式)
用来替代 <%=  %>

1) 语法：  ${ }

2) 作用：

		1. 可以自动从4个Scope(作用域)中获取数据
			1. Scope包括：  
				1. pageContext（当前jsp页面）
				2. request
				3. session
				4. servletContext
		    2. 从小到大逐个去找，找到就返回，都找不到就什么都不返回
		2. 读取访问到的数据
			1. 包装类或String：直接访问，如${count}
					注：可以通过pageScope，requestScope,sessionScope, applicationScope来指定仅从对应的Scope中找数据
					如：${requestScope.count}是仅在request中查找count变量，有则返回，无则什么都不显示
			2. 数组： 数组变量名[下标]，如：array[0]
			3. 集合： 集合变量名[下标]，如：list[0]
			4. Map: map变量名["key"],如：map["name"]
						或 map变量名.key 如：map.name
			5. 对象：变量名.属性名，如：user.username
						注：实际是调用对应的get方法，如没有get方法会报错
			6. 综合应用：如 list[0].username
				
			7. 获取用户请求参数 param.username

			3. 将数据显示在页面上


#### 3.2 JSTL JSP标准标签库

1) 使用JSTL的步骤

	1. 导入jstl.jar

			<dependency>
				<groupId>jstl</groupId>
				<artifactId>jstl</artifactId>
				<version>1.2</version>
			</dependency>
	
	2. 在jsp上添加 <%@ taglib prefix="" uri="" %>
		声明所使用的标签库
		prefix：标签的前缀
		uri: 指明具体使用哪个子库
		子库：
			core 核心库（使用率最高的库）
			fmt  格式化相关的库 格式化输出日期，金额...
			--- 下面的很少用 ---
			functions	为EL提供增强功能 （很少用）
			xml  解析XML所使用的库
			sql  访问数据库所使用的库

	3. 在页面上使用对应的标签

			<c:if>
			<c:choose>
			<c:forEach>

2) c:if
    1. 执行判断
    2. test=""
    3. var=""
    4. scope=""

3) c:choose

4) c:forEach

实现循环
1. begin:循环开始的位置
2. end:循环结束的位置
3. step:循环的步长
4. var:循环变量
5. itmes:指定遍历的集合或数组
6. varStatus:保存了循环状态的对象
	count，当前循环的次数

5）fmt:formatNumber
1. value
2. pattern：指定输出的样式

6）fmt:formatDate
1. value
2. pattern：指定输出的样式


#### 3.3 JSP的九大内置对象
1. out			: JSPWriter
2. request		: HttpServletRequest
3. response		: HttpServletResponse
4. session		: HttpSession
5. application	: ServletContext
6. pageContext	: PageContext

7. config		: ServletConfig
8. exception	: Throwable(上一个页面出现的异常)(基本不用)
9. page			: Servlet(this)
