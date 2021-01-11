<?php
function reply($statusHeader, $data)
{
  header($statusHeader);
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  header('Cache-Control: no-cache');
  header('Connection: close');
  printf("%s", json_encode($data));
  exit;
}

function replyError($err)
{
  $data = array(
    'ok' => false,
    'message' => $err
  );
  reply('HTTP/1.1 404 Not Found', $data);
}

function replySuccess($data)
{
  reply('HTTP/1.1 200 OK', $data);
}

define('METHOD', 'aes-256-cbc');
define('KEY',    'llavscQ0C5o+VSB92YUg1FjXMEca3EcZpHDLKhVg8PcC5NZUkWc5huiBg+uh5kL2KNfx/GwiWqpLBvYWX12CFQ==');
define('IV',     'XMAPuUph2466KjHbQ+SLEQ==');
define('DB_PASSWORD_ENCRYPTED', 'jzphXBiNPdCJBKRsy+rElA==');

function my_secured_encrypt($data)
{
  $method = METHOD;
  $key = base64_decode(KEY);
  $iv = base64_decode(IV);

  $encrypted = openssl_encrypt($data, $method, $key, OPENSSL_RAW_DATA, $iv);
  $output = base64_encode($encrypted);
  return $output;
}

function my_secured_decrypt($input)
{
  $method = METHOD;
  $key = base64_decode(KEY);
  $iv = base64_decode(IV);
  $encrypted = base64_decode($input);

  $data = openssl_decrypt($encrypted, $method, $key, OPENSSL_RAW_DATA, $iv);
  return $data;
}

$username = 'sedymedvedwz0031';
$password = my_secured_decrypt(DB_PASSWORD_ENCRYPTED);
$dbhost   = 'sql5.webzdarma.cz';
$dbname   = $username;

?>
