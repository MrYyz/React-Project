<?php
        include 'connect.php';
        $theuser=isset($_GET['theuser'])?$_GET['theuser']:'';
        if($theuser!=''){
            $sql="select * from userlist where username='$theuser'";
            $result=$conn->query($sql);
            $arr=$result->fetch_all(MYSQLI_ASSOC);
            $arr=json_encode($arr,JSON_UNESCAPED_UNICODE);
            echo $arr;
        }
?>