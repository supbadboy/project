package com.spring.jdbc;

import java.sql.*;

/**
 * 耦合
 *      程序之间的耦合
 *      1.类之间的依赖
 *      2.方法之间的依赖
 *
 *
 *  解耦
 *      降低程序开发构成中的高耦合情况
 *          应该做到的额是，编译时期不依赖，运行时才依赖
 *      解耦思路
 *      1.使用反射来创建对象，而避免使用关键字new
 *      2.通过配置文件，来读取文件的全路径名来创建该对象
 */
public class JdbcDemo1 {
    public static void main (String [] args) throws Exception {
        //注册驱动
       // DriverManager.registerDriver(new com.mysql.jdbc.Driver());
        Class.forName("com.mysql.jdbc.Driver");
        //获取连接
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","xiongc");
        //获取操作数据库预处理
        PreparedStatement pst = conn.prepareStatement("select * from account");
        //执行sql得到结果集
        ResultSet res = pst.executeQuery();
        //遍历结果集  得到每一一个数据
        while(res.next()){
            String name =res.getString("name");
            System.out.println("打印的姓名为："+name);
        }
        res.close();
        pst.close();
        conn.close();
        //释放资源
    }
    /**
     * 异常处理
     * Loading class `com.mysql.jdbc.Driver'. 错误
     *  百度这个错误的原因是，引用的mysql依赖过于新，之前那个驱动的引用方式以及废弃，所以这里换成5.1.6版本的mysql
     */
}
