<?php
include('../.db.php');

$mysqli = new mysqli($dbhost, $username, $password, $dbname);

if ($mysqli->connect_errno) {
  replyError("Failed to connect to DB: (" . $mysqli->connect_errno . ")");
}

$sql = "INSERT INTO users (username, email, password, preferences) VALUES (?,?,?,?)";
$err = $_GET['err'];
if( $err == 1) {
  $sql = "X" . $sql;
}

if (!($stmt = $mysqli->prepare($sql))) {
  replyError("Prepare failed: (" . $mysqli->errno . ")");
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$preferences = $_POST['preferences'];
$stmt->bind_param("ssss", $username, $email, $password, $preferences);

if (!$stmt->execute()) {
  replyError("Execute failed: (" . $mysqli->errno . ")");
}

$inserted_id = mysqli_insert_id($mysqli);

$data = array(
 'ok'          => true,
 'inserted_id' => $inserted_id
);
replySuccess($data);

$stmt->close();
$mysqli->close();
?>
