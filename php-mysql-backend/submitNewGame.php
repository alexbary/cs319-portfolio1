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
	srand(mktime());
	$gameID = mt_rand(10000000, 99999999);

	$qry="INSERT INTO GameRecords (`gameID`, `player1`, `whosTurnIsIt`, `whoWon`) VALUES ('$gameID', '$username', '$username', 'New');";
	mysql_query($qry);
?>