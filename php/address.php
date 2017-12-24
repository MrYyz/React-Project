<?php

header('Access-Control-Allow-Origin:*');

include "./DBHelper.php";

$username = isset($_GET['username'])?$_GET['username']:'007';

// 地址表用户id
$id = isset($_GET['id'])?$_GET['id']:'';

// 地址表关联用户名字段
$uid = isset($_GET['uid'])?$_GET['uid']:'';
// 收货人
$rname = isset($_GET['rname'])?$_GET['rname']:'';
$address = isset($_GET['address'])?$_GET['address']:'';
$default = isset($_GET['default'])?$_GET['default']:'1';
$phone = isset($_GET['phone'])?$_GET['phone']:'';
// 操作
$action = isset($_GET['action'])?$_GET['action']:'1';

switch ($action) {
	case 'insert':
		//添加
		$sql = "INSERT into `address` (address,`default`,uid,rname) VALUES ('${address}','${default}','${uid}','${rname}')";
		$result = excute($sql);
		break;
	case 'del':
		// 删除
		$sql = "DELETE address from address,`userlist` where address.uid = `userlist`.id and address.id = '${id}'";
		$result = excute($sql);
		// echo $sql;
		// echo json_encode([], JSON_UNESCAPED_UNICODE);
		$sql1 = "select * from userlist as u inner join address as a on u.id = a.uid where u.username = '${username}'";
		$res = query($sql1);
		// echo $sql;
		echo json_encode($res, JSON_UNESCAPED_UNICODE);
		break;
    case 'update':
    	// 更新
		$sql = "UPDATE `userlist` as u INNER JOIN address as a ON u.id = a.uid SET u.phone = '${phone}', a.address = '${address}' WHERE a.id = '${id}'";
		$result = excute($sql);
		break;
	default:
		// 查询
		$sql = "select * from userlist as u inner join address as a on u.id = a.uid where u.username = '${username}'";
		if($id){
			$sql .= " and a.id = '${id}'";
		}
		$res = query($sql);
		// echo $sql;
		echo json_encode($res, JSON_UNESCAPED_UNICODE);
		break;
}

?>