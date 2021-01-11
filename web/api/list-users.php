<?php
include('../.db.php');

$mysqli = new mysqli($dbhost, $username, $password, $dbname);

if ($mysqli->connect_errno) {
  replyError("Failed to connect to DB: (" . $mysqli->connect_errno . ")");
}

$sql = "SELECT id, username, email, password, preferences FROM users";

$err = $_GET['err'];
if( $err == 1) {
  $sql = "X" . $sql;
}

if (!($stmt = $mysqli->prepare($sql))) {
  replyError("Prepare failed: (" . $mysqli->errno . ")");
}

if (!$stmt->execute()) {
  replyError("Execute failed: (" . $mysqli->errno . ")");
}

if (!$stmt->bind_result($id, $username, $email, $password, $preferences)) {
  replyError("Binding output parameters failed: (" . $stmt->errno . ")");
}

$allData = array();
while ($stmt->fetch()) {
   $data = array(
   'id'          => $id,
   'username'    => $username,
   'email'       => $email,
   'password'    => $password,
   'preferences' => $preferences
   );
   array_push($allData, $data);
 }
replySuccess($allData);

$stmt->close();
$mysqli->close();
?>
