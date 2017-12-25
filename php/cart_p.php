<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $username = isset($_GET["username"]) ? $_GET["username"] : '';
    $guId = isset($_GET["guId"]) ? $_GET["guId"] : '';
    $goodsQty = isset($_GET["goodsQty"]) ? $_GET["goodsQty"] : '';
    $sort = isset($_GET["sort"]) ? $_GET["sort"] : '';
    $order_guid = isset($_GET["order_guid"]) ? $_GET["order_guid"] : '';
    $order_status = isset($_GET["order_status"]) ? $_GET["order_status"] : '';
    $total = isset($_GET["total"]) ? $_GET["total"] : '';

    
    include 'DBHelper.php';
    if($sort == 'del'){
        $sql1 = "delete from sppingcart where guId='$guId' and username='$username'";
        // echo $sql
        $result1 = excute($sql1);
    }else if($sort == 'updata'){
        $sql2 = "update sppingcart set goodsQty='$goodsQty' where guId='$guId' and username='$username'";
        $result2 = excute($sql2);
    }else if($sort == 'order'){
        //添加订单
        $sql8 = "insert into orders (username,guId,goodsQty,order_guid,order_status,total) values ('$username','$guId','$goodsQty','$order_guid','$order_status','$total')";
        $result8 = excute($sql8);
    }
        $sql = "select * from sppingcart as cart inner join goodslist as go on go.guId = cart.guId where username = '$username'";
        $result = query($sql);
        // var_dump($result);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
   
?>