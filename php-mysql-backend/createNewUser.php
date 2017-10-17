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

	$qry="INSERT INTO Users ('username', 'password') VALUES ('$username', '$password');";
	mysql_query($qry);

	$data = array($username, 'insertSessionTokenHere');
	echo json_encode($data);
?>