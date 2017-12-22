<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    // header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    // header('Access-Control-Request-Headers:accept, content-type');
    
    include 'DBHelper.php';

    $phone = isset($_POST["phone"]) ? $_POST["phone"] : 'admin';
    // $code = isset($_POST["code"]) ? $_POST["code"] : 'admin';
    $username = isset($_POST["username"]) ? $_POST["username"] : 'admin';
    $password = isset($_POST["password"]) ? $_POST["password"] : 'admin';

    $sql = "insert into userlist(`phone`,`username`,`password`) values('$phone','$username','$password')";
    
    $result = excute($sql);

    if($result){
        $res = ("type" => 'ok');
    }else{
        $res = ("type" => 'no');
    }
    var_dump($res);
    // echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>
