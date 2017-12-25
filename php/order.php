<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$state = isset($_GET['state'])?$_GET['state']:'全部';
$username = isset($_GET['username'])?$_GET['username']:'carl';
$oid = isset($_GET['oid'])?$_GET['oid']:'g018435';
$action = isset($_GET['action'])?$_GET['action']:'close';

if($action == "del"){
	$sql1 = "DELETE orders from orders where order_guid = '${oid}'";
	$result = excute($sql1);
}else if($action == "close"){
	$sql1 = "UPDATE orders set order_status = '已关闭' where order_guid = '${oid}'";
	$result = excute($sql1);
}

$sql = "select * from orders as o inner join goodslist as g on g.guId = o.guId where username = '${username}'";

if($state != '全部'){
	$sql .= " and order_status = '${state}'";
}

// echo $sql;
$res = query($sql);

echo json_encode($res, JSON_UNESCAPED_UNICODE);

?>