<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$username = isset($_GET['username'])?$_GET['username']:'';

$sql = "SELECT * FROM 
goodscollection AS gc, goodslist AS g WHERE gc.guId = g.guId AND gc.username = '${username}'";

$res = query($sql);

echo json_encode($res, JSON_UNESCAPED_UNICODE);

?>