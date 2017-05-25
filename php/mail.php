<?php

    function cleanText($var){
        return trim(strip_tags($var));
    }

require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->Host='smtp.mailgun.org';
$mail->Port='25';
$mail->Username   = 'postmaster@selectoglobal.com'; // SMTP account username
$mail->Password   = 'a62b1a08314e0b6ce524369287769444';
$mail->SMTPKeepAlive = true;
$mail->Mailer = "smtp";
$mail->IsSMTP(); // telling the class to use SMTP
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->CharSet = 'utf-8';
$mail->SMTPDebug  = 0;

$mail->setFrom('postmaster@selectoglobal.com', 'Site contact form');
$mail->addAddress('oleg.gubich@gmail.com');

    $req = json_decode(file_get_contents('php://input'), true);
    if(isset($req['name']) && isset($req['email']))
    {
        //$message = json_encode($codeMail);
        if (!empty($req['name'])) $name = $req['name'];
        if (!empty($req['email'])) $email = $req['email'];
        if (!empty($req['message'])) $message = $req['message'];

        $mes = "Имя: " .$name . "\nПочта: ".$email . "\nСообщение: ".$message;
        $subject = 'Site message from - ' . $name;

		$mail->Subject = $subject;
		//Read an HTML message body from an external file, convert referenced images to embedded,
		//convert HTML into a basic plain-text alternative body
		$mail->msgHTML($mes);
		//send the message, check for errors
		if (!$mail->send()) {
			echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
			echo "ok";
		}
    }


?>
