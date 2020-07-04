<?php
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$text = $data['text'];
$name = $data['name'];
$phone = $data['phone'];
$select = $data['selectValue'];
$mail_to = $data['mailTo'];


$subject = 'Заявка с сайта ecoZ, тема сообщения: '.$select;
$email_body = '' .$name . ' оставил заявку, его телефон ' .$phone. ' Почта этого пользователя: ' .$email.' Сообщение: ' .$text;
$email_form ='EcoZ';
$headers = 'From:'.$email_form;
$headers .='Reply-To:'.$email;

if(!mail($mail_to,$subject,$email_body,$headers)) {
    echo 'Error';
} else {
   echo '200';
}

?>
