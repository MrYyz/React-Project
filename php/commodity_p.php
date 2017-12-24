<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $guId = isset($_GET["guId"]) ? $_GET["guId"] : '';
    $sort = isset($_GET["sort"]) ? $_GET["sort"] : '';
    $username = isset($_GET["username"]) ? $_GET["username"] : '';
    $goodsQty = isset($_GET["goodsQty"]) ? $_GET["goodsQty"] : '';
    $order_guid = isset($_GET["order_guid"]) ? $_GET["order_guid"] : '';
    $order_status = isset($_GET["order_status"]) ? $_GET["order_status"] : '';
    $total = isset($_GET["total"]) ? $_GET["total"] : '';

    include 'DBHelper.php';
    if($sort == 'join'){
        //加入购物车
        $sql3 = "select * from sppingcart where guId='$guId' and username='$username'";
        $result3 = query($sql3);        
        if($result3){
            //同种商品只添加数量
            $gQty = $result3[0] -> goodsQty + $goodsQty;
            $sql4 = "update sppingcart set goodsQty='$gQty' where guId='$guId' and username='$username'";
            $result4 = excute($sql4);
        }else{
            //不同种商品添加
            $sql5 = "insert into sppingcart (username,guId,goodsQty) values ('$username','$guId','$goodsQty')";
            $result5 = excute($sql5);
        }
    }else if($sort == 'collect'){
        //收藏
        $sql6 = "insert into goodscollection (username,guId) values ('$username','$guId')";
        $result6 = excute($sql6);
    }else if($sort == 'nocollect'){
        //取消收藏
        $sql7 = "delete from goodscollection where guId='$guId' and username='$username'";
        $result7 = excute($sql7);
    }else if($sort == 'buy'){
        //添加订单
        $sql8 = "insert into orders (username,guId,goodsQty,order_guid,order_status,total) values ('$username','$guId','$goodsQty','$order_guid','$order_status','$total')";
        $result8 = excute($sql8);
    }

    $sql = "select * from goodslist where guId='$guId'";
    $result = query($sql);
    $type = $result[0] -> type;

    $sql1 = "select * from goodslist where guId='$guId';select * from goodsimg where guId='$guId';select * from evaluate where guId='$guId' limit 0,3;select * from goodslist where type='$type' limit 0,10;select * from sppingcart where username='$username';select * from goodscollection where guId='$guId' and username='$username'";
    $result1 = multi_query_oop($sql1);
    // var_dump($result1);
    echo json_encode($result1, JSON_UNESCAPED_UNICODE);
?>