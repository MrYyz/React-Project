<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$username = isset($_GET['username'])?$_GET['username']:'';
$state = isset($_GET['state'])?$_GET['state']:'已完成';

// $sql = "INSERT into address ('address','default','uid','rname') values ('${address}','${default}','${uid}','${rname}')";

$sql = "select * from orders as o inner join
userlist as u on o.username = u.username where o.username = '${username}' AND o.order_status = '${state}'";

$res = query($sql);


echo json_encode($res, JSON_UNESCAPED_UNICODE);
?>