<?php
	header('Access-Control-Allow-Origin: *');

	require_once('connection.php');

	function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}

	$un = clean($_GET["username"]);

	$qry="SELECT * FROM GameRecords WHERE username='$un' AND password='$password'";
	$result=mysql_query($qry);

	if($result) {
		$data = array('invalid');
		echo json_encode($data);

	}else {
		die("Query failed");
	}
?>