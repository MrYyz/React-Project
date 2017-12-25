<?php

	// new 构造函数
	
	// 类
	class Person{
		// 添加属性
		var $age = 18;

		// 构造函数
		function __construct($name,$gender){
			// 给对象（实例）添加属性
			$this->name = $name;
			$this->gender = $gender;

			// echo "$name,$gender";
		}


		// 添加方法
		// function say(){
		// 	echo "my name is $this->name, $this->gender, 今年 $this->age 岁";
		// }
	}
	
	
	// PHP中创建对象(实例)
	$p = new Person('曹操','男');

	// php中访问对象属性
	// ->
	// echo "<h4>对象属性的获取：</h4>";
	// echo "$p->age";
	var_dump($p);

	// 执行对象中的方法
	// $p->say();
?>