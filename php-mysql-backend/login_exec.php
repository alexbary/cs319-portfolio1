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

	$username = clean($_GET["username"]);
	$password = clean($_GET["password"]);

	$qry="SELECT * FROM Users WHERE username='$username' AND password='$password'";
	$result=mysql_query($qry);

	if($result) {
		if(mysql_num_rows($result) > 0) {

			$data = array($username, 'insertSessionTokenHere');
			echo json_encode($data);

			exit();
		} else {
			$data = array('invalid');
			echo json_encode($data);
		}
	}else {
		die("Query failed");
	}
?>