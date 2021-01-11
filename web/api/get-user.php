<?php
include('../.db.php');

$mysqli = new mysqli($dbhost, $username, $password, $dbname);

if ($mysqli->connect_errno) {
  replyError("Failed to connect to DB: (" . $mysqli->connect_errno . ")");
}

$sql = "SELECT id, username, email, password, preferences FROM users WHERE id = ?";

$err = $_GET['err'];
if( $err == 1) {
  $sql = "X" . $sql;
}

if (!($stmt = $mysqli->prepare($sql))) {
  replyError("Prepare failed: (" . $mysqli->errno . ")");
}

$id = $_GET['id'];
$stmt->bind_param("i", $id);

if (!$stmt->execute()) {
  replyError("Execute failed: (" . $mysqli->errno . ")");
}

if (!$stmt->bind_result($id, $username, $email, $password, $preferences)) {
  replyError("Binding output parameters failed: (" . $stmt->errno . ")");
}

$data = null;
if($stmt->fetch()) {
   $data = array(
   'id'          => $id,
   'username'    => $username,
   'email'       => $email,
   'password'    => $password,
   'preferences' => $preferences
   );
  replySuccess($data);
} else {
  replyError("User not found.");
}

$stmt->close();
$mysqli->close();
?>
