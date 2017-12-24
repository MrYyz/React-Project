<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $order_guid = isset($_GET["order_guid"]) ? $_GET["order_guid"] : 'g1514097714925';
    $username = isset($_GET["username"]) ? $_GET["username"] : 'carl';


    include 'DBHelper.php';
    $sql1 = "select * from userlist where username = '$username'";
    $result1 = query($sql1);
    $uid = $result1[0] -> id;

    $sql = "select * from orders as o inner join goodslist as go on go.guId = o.guId where order_guid = '$order_guid' and username = '$username';select * from address as a inner join userlist as u on u.id = a.uid where uid = '$uid'";

    $result = multi_query_oop($sql);
    // var_dump($result);
        
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>