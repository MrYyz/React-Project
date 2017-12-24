<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $username = isset($_GET["username"]) ? $_GET["username"] : '';
    $guId = isset($_GET["guId"]) ? $_GET["guId"] : '';
    $sort = isset($_GET["sort"]) ? $_GET["sort"] : '';
    $Comment = isset($_GET["Comment"]) ? $_GET["Comment"] : '';


    include 'DBHelper.php';

    if($sort == 'publish'){
        $sql1 = "insert into evaluate (username,guId,Comment) values ('$username','$guId','$Comment')";
        $result1 = excute($sql1);
    }

    $sql = "select * from evaluate where guId = '$guId' order by discussTime desc";
    $result = query($sql);
    // var_dump($result);
    
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>