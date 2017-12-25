<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    // header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    // header('Access-Control-Request-Headers:accept, content-type');
    
    include 'DBHelper.php';

    $phone = isset($_POST["phone"]) ? $_POST["phone"] : 'admin3';
    // $code = isset($_POST["code"]) ? $_POST["code"] : 'admin';
    $username = isset($_POST["username"]) ? $_POST["username"] : 'admin3';//昵称
    $password = isset($_POST["password"]) ? $_POST["password"] : 'admin3';

    $sql1 = "select * from userlist where phone = '$phone'";
    $result1 = query($sql1);
    if($result1){
        class Obj{
            var $phone_exist = '1';
        }
        $o = new Obj();
        $arr = array($o);
    }else{
        $sql2 = "select * from userlist where username = '$username'";
        $result2 = query($sql2);
        if($result2){
            class Obj{
                var $username_exist = '1';
            }
            $o = new Obj();
            $arr = array($o);
        }else{
            $sql3 = "insert into userlist (`username`,`phone`,`password`) value ('${username}','${phone}','${password}')";
            $result3 = excute($sql3);
            class Obj{
                var $insert_success = '1';
                function __construct($phone,$username){
                    $this->phone = $phone;
                    $this->username = $username;
                }
            }
            $o = new Obj($phone,$username);
            $arr = array($o);
        }
    }

    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>
