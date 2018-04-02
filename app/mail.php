<?php

$frm_name  = "Youname"; //Откуда отправляється
$recepient = "magaky71@gmail.com"; //mail на який отправляються дані с форми
$sitename  = "Armata Financical Group"; //название сайта
$subject   = "Новая заявка с сайта \"$sitename\"";

// поля вводим які є на сайті для ввода інформації
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["formname"]);

$message = "
Форма: $formname <br>
E-mail: $email <br>
Имя: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
