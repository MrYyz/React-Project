<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";


$action = isset($_GET['action'])?$_GET['action']:'';
$username = isset($_GET['username'])?$_GET['username']:'';


// address id字段
$id = isset($_GET['id'])?$_GET['id']:'';


if($action=="setDefault"){
	$sql = "UPDATE address SET `default` = '1'";

	$sql1 = "UPDATE address SET `default` = '0' WHERE id = ${id}";
	$result = excute($sql);
	$result1 = excute($sql1);

	$sql3 = "select * from userlist as u inner join address as a on u.id = a.uid where u.username = '${username}'";
	// if($id){
	// 	$sql .= " and a.id = '${id}'";
	// }
	$res = query($sql3);
	// echo $sql;
	echo json_encode($res, JSON_UNESCAPED_UNICODE);

	// echo $sql;
	// echo json_encode([], JSON_UNESCAPED_UNICODE);
}

?>