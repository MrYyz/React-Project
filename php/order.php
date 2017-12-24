<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$state = isset($_GET['state'])?$_GET['state']:'';
$username = isset($_GET['username'])?$_GET['username']:'carl';

$sql = "select * from orders as o inner join goodslist as g on g.guId = o.guId where username = '${username}'";


if($state != '全部'){
	$sql .= " and order_status = '${state}'";
}

// echo $sql;
$res = query($sql);

echo json_encode($res, JSON_UNESCAPED_UNICODE);

?>