<?php
    header("Access-Control-Allow-Origin:*");
    $conn=new mysqli('10.3.135.52','yezhang',"123456",'itemthree');
    //检测是否连接成功
    if($conn->connect_errno){
        die('连接失败'.$conn->connect_errno);
    }

    $conn->set_charset('utf8');
   
?>