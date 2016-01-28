<?php
$sendto   = "biz2408855@yandex.ru"; //danil-bm@yandex.ru
//$sendto = "igrigoryev@gmail.com";
$usermail = "emailukr.bizzz.ru";
$username  = nl2br($_POST['name']);
$usertel  = nl2br($_POST['tel']);
$usercomment  = nl2br($_POST['comment']);
$subject  = nl2br($_POST['subject']);
$email = nl2br($_POST['email']);
// Формирование заголовка письма

$topic = "emailukr - ".$subject."\r\n";

$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>Комментарии:</strong> ".$usercomment."</p>\r\n";
$msg .= "<p><strong>E-mail: </strong>".$email."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $topic, $msg, $headers)) {
	echo "true";
	die();
} else {
	echo "false";
	die();
}

?>