<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$username = isset($_GET['username'])?$_GET['username']:'';

// $sql = "select * from evaluate as e WHERE username='${username}'";

$sql = "SELECT * FROM evaluate e INNER JOIN goodslist g ON e.guid = g.guId WHERE e.username = '${username}'";

$res = query($sql);

echo json_encode($res, JSON_UNESCAPED_UNICODE);

?>