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

	$qry="Select gameID, whosTurnIsIt From GameRecords Where whoWon = 'In Progress' AND (player1 = '$username' OR player2 = '$username');";
	$result=mysql_query($qry);
	$table = array();
 
	if($result) {
		while ($nt = mysql_fetch_assoc($result)) {
			$table[] = $nt;
		}

		echo json_encode($table);
	}else {
		die("Query failed");
	}
?>