<?php
    include 'connect.php';
    $recommend=isset($_GET['recommed'])?$_GET['recommed']:"";
    $handbag=isset($_GET['handbag'])?$_GET['handbag']:"";
    $messbag=isset($_GET['messbag'])?$_GET['messbag']:"";
    $singlebag=isset($_GET['singlebag'])?$_GET['singlebag']:"";
    

    $sql='select * from goodslist';
    $result=$conn->query($sql);
    $result=$result->fetch_all(MYSQLI_ASSOC);
    $arr=json_encode($result,JSON_UNESCAPED_UNICODE);
    echo $arr;
?>