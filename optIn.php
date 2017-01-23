<?php
//ini_set('display_errors', 0);
header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Pragma: no-cache");

$email	= trim(htmlspecialchars($_REQUEST["email"]));
$name	= trim(htmlspecialchars($_REQUEST["name"]));

$pfileName	= "mails.txt";
$MyFile 	= fopen($pfileName, "a");
$nline="\"".$email."\""	."," ."\"".$name."\"" ."\r\n";
fwrite($MyFile, $nline);
fclose($MyFile);
die;


/* 	***************	THE DATABASE CODE

//Attention: you may want to use stronger function here to 
//purify the requested parameters and protect against injections.
//Example: $email	= clean_this($_REQUEST["email"]);

$email	= trim(htmlspecialchars($_REQUEST["email"]));
$name	= trim(htmlspecialchars($_REQUEST["name"]));

// Lets connect to mySQL ==> replace with your own values for Server/Host, database, username, password
$pdbHost = "localhost";
$pdbUserName = "root";
$pdbPassword = "root";
$pdbName    ="newsletters";

//  You can use a different table (and fields for name and email). 
//  But change the table name and field names in the SQL queries below.

//  connect to mySQL
$conlink = mysql_connect($pdbHost, $pdbUserName, $pdbPassword);
if(!$conlink) {die('<span class=errormessage>Unable to connect to '.$pdbHost.'</span><br>');}
mysql_select_db($pdbName, $conlink);
//  Check if subscriber exists already
$SQL= "select email from mysubscribers where email='".$email."'";
$result	= mysql_query($SQL);
if(!$result) {die('Problem in SQL: '.$SQL);}    //just ccking if there was a problem with your query
if (mysql_num_rows($result)==0) {   // it's a new email=> add it
  $SQL2= "INSERT into mysubscribers (name, email) VALUES ('".$name."', '".$email."')";
    mysql_query($SQL2);
}
mysql_close($conlink);
*/

//Sample script for the table:mysubscribers in the database:newsletters
/*
CREATE TABLE `mysubscribers` (
	`idEmail` mediumint(9) NOT NULL auto_increment,
	`email` varchar(150) default NULL,
	`name` varchar(150) default NULL,
PRIMARY KEY  (`idEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 
*/
?>
	