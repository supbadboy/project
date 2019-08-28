package com.spring.factory;

/**
 *  一个创建Bean 对象的工厂
 *  Bean：在计算机语言是，是一个可重用组件含义
 *  JavaBean ： 用java语言编写的可重用组件
 *      javaBean > 实体类
 *
 *      它就是创建我们的service 和 dao对象的
 *      第一：需要一个配置文件来配置我们的service 和 dao
 *      第二：通过读取配置文件中配置的内容，反射创建对象
 *
 *      我们的配置文件可以是xml也可以是properties
 */
public class BeanFactory {
}
