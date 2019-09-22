<?php
@header("content-type:text/html;charset=utf8");
@header("Access-Control-Allow-Origin:*");
//如何连接数据  数据库在哪里   用户名+密码才能连接上
mysql_connect("localhost:3306","root","root");
//选择数据库
mysql_select_db("21cake");
mysql_query("set character set 'utf8'"); //设置执行语句的编码格式  防止中文乱码  求你了 不要抄  直接复制粘贴 如果出错中文取出来就是null
?>