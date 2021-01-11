<?php
include('../.db.php');
$plain = $_GET['plain'];
$encrypted = my_secured_encrypt($plain);
echo $encrypted;
?>
