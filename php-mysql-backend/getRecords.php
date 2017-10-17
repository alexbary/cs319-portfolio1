<?php
	header('Access-Control-Allow-Origin: *');

	require_once('connection.php');

	$qry="Select gameID, player1, player2, whosTurnIsIt, whoWon From GameRecords Where player2 IS NOT NULL;";
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