<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    // header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    // header('Access-Control-Request-Headers:accept, content-type');
    
    include 'DBHelper.php';

    $username = isset($_POST["username"]) ? $_POST["username"] : '222';
    $password = isset($_POST["password"]) ? $_POST["password"] : '222';
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : '222';

    $id = isset($_POST["id"]) ? $_POST["id"] : '222';
    $msgType = isset($_POST["msgType"]) ? $_POST["msgType"] : 'system';

    // $sql = 'select SQL_CALC_FOUND_ROWS * from manager ';

    if($msgType){
        if($msgType == 'system'){
            $sql0 = "update `systemMsg` set `status`='1' where id='$id'";
            $result0 = excute($sql0);
        }
    }
    
    class Message {
        function __construct($orderMsg,$goodsMsg,$system){
            $this->orderMsg = $orderMsg;
            $this->goodsMsg = $goodsMsg;
            $this->system = $system;
        }
    }

    // $sql1 = "select * from systemMsg where phone = '${phone}' and username = '${username}' ";
    // $result1 = query($sql1);
    
    $result1 = "暂无消息";//晒单

    $sql2 = "SELECT * FROM `goodscollection` AS c INNER JOIN `goodslist` AS l ON (c.guId = l.guId) WHERE username = '${username}'";
    $result2 = query($sql2);//商品收藏

    $sql3 = "select * from systemMsg where phone = '${phone}' and username = '${username}' ";
    $result3 = query($sql3);//系统

    $newMsg = new Message($result1,$result2,$result3);

    echo json_encode($newMsg,JSON_UNESCAPED_UNICODE);



    // SELECT * from `staff` as s inner join `order` as o WHERE s.number = o.number
    // 
    // $sql = "update `order` set `order`='$order',cus_name='$cus_name',number='$number',startTime='$startTime',endTime='$endTime',class='$class',status='$status',price='$price',limitTime='$limitTime',remark='$remark',`hourlyWage`='$hourlyWage' where id='$id'";
        // $result = excute($sql);
?>