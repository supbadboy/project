package com.spring.factory;

import java.io.InputStream;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

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
 *
 *
 *      代码升级优化，如果按照之前的获取对象实例化的方法，每次获取一个新的对象，一点时间没有使用
 *      就会被GC回收，然后我们下次需要使用的时候，又得重新创建对象，这样会降低使用性能，所以我们
 *      采用单例模式，讲初始化创建的对象存储起来，然后需要时间的时候直接拿这样就提高了使用的效率
 */
public class BeanFactory {
    private static Properties pro ;
    //加载配置文件只需要走执行一次，所以放在静态块里面

    //创建一个Map容易，用于存放对象的路径和实例化对象的地址
    private  static Map<String, Object> beans;
    static{
        try {
            //实例化pro对象
            pro = new Properties();
            //读取文件流对象
            InputStream in = BeanFactory.class.getClassLoader().getResourceAsStream("beanFactory.properties");
            //加载流对象文件
            pro.load(in);
            //实例化Map对象
            beans = new HashMap<String, Object>();
            Enumeration keys = pro.keys();
            while (keys.hasMoreElements()){
                String key = keys.nextElement().toString();
                String classPath = pro.getProperty(key);
                Object bean = Class.forName(classPath).newInstance();
                beans.put(key,bean);
            }

        } catch (Exception e) {
            throw new ExceptionInInitializerError("加载配置文件失败");
        }
    }


    public static Object getBean (String beanName){
        return beans.get(beanName);
    }
    //获得实力化对象的方法
//    public static Object getBean (String className){
//        Object bean = null;
//        try{
//            String classPath = pro.getProperty(className);
//            System.out.println("路径为："+classPath);
//            //实例化对象
//            bean = Class.forName(classPath).newInstance();
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        return bean;
//    }

}
