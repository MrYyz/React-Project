<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    // header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    // header('Access-Control-Request-Headers:accept, content-type');
    
    include 'DBHelper.php';

    $username = isset($_GET["username"]) ? $_GET["username"] : 'admin';
    $password = isset($_GET["password"]) ? $_GET["password"] : 'admin';


    // $sql = 'select SQL_CALC_FOUND_ROWS * from manager ';

    $sql = "select * from userlist where phone = '${username}' and password = '${password}' ";
    
    $result = query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>