<?php
@include_once("config.php");

$username = $_GET["username"];
$usertel = $_GET["userTel"];
$userpwd = $_GET["userPwd1"];


$str = "select count(*) from  userinfo where  username = '$username' or usertel = '$usertel'";
 
$result = mysql_query($str);//执行  1 查询 (结果) 和DML  增删改(受影响的行数)

$obj  = mysql_fetch_array($result); //count 只有一行数据  是一个对象

$count  = $obj["0"];//得到结果

// echo  $obj["0"];
$temp = array();
if($count>0){//大于0表示用户名或者手机号存在
    $temp["code"]=0;
    $temp["msg"]="用户名或者手机号已经存在";
}else{
    //表示不存在
    $sql = "insert  INTO  userinfo(username,userpwd,usertel)  values ('$username','$userpwd','$usertel')";

    mysql_query($sql);//新增  返回受影响的行数

    $num =  mysql_affected_rows(); //
    if($num>0){
        $temp["code"]=1;
        $temp["msg"]="注册成功";
    }else{
        $temp["code"]=0;
        $temp["msg"]="注册失败";
    }
}
echo  json_encode($temp);

?>