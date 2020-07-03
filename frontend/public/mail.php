<?php
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$text = $data['text'];
$name = $data['name'];
$phone = $data['phone'];
$select = $data['selectValue'];
// $mail_to = $data['mailTo'];
$mail_to = 'fepifmel@gmail.com';                              

$subject = 'Заявка с сайта ecoZ, тема сообщения: '.$select;
$email_body = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$text.'<br>Сообщение: ' .$email;

$headers = 'From:'.$email_form.'\r\n';
$headers .='Reply-To:'.$email.'\r\n';


mail($mail_to,$subject,$email_body,$subject);

?>
