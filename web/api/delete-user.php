<?php
include('../.db.php');

$mysqli = new mysqli($dbhost, $username, $password, $dbname);

if ($mysqli->connect_errno) {
  replyError("Failed to connect to DB: (" . $mysqli->connect_errno . ")");
}

$sql = "DELETE FROM users WHERE id = ?";
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

$data = array(
 'ok'           => true,
 'deleted_rows' => $stmt->affected_rows
);
replySuccess($data);

$stmt->close();
$mysqli->close();
?>
