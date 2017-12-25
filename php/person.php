<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$username = isset($_GET['username'])?$_GET['username']:'';
$action = isset($_GET['action'])?$_GET['action']:'';

$email = isset($_GET['email'])?$_GET['email']:'';
$phone = isset($_GET['phone'])?$_GET['phone']:'';

if($action == 'update'){
	$sql = "UPDATE userlist SET email = '$email',phone='$phone' WHERE username='${username}'";
	$result = excute($sql);
	// echo $sql;
	echo json_encode([], JSON_UNESCAPED_UNICODE);
}else{
	$sql = "select * from userlist where username = '${username}'";
	$res = query($sql);
	echo json_encode($res, JSON_UNESCAPED_UNICODE);
}

?>