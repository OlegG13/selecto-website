<?php
error_reporting (E_ALL);
ini_set('display_errors', "on");
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
        $mail->addAddress('y.mamonchuk@selectoglobal.com');

        $req = json_decode(file_get_contents('php://input'), true);
        if(isset($req['name']) && isset($req['email']))
        {
        //$message = json_encode($codeMail);
        if (!empty($req['name'])) $name = $req['name'];
        if (!empty($req['email'])) $email = $req['email'];
        if (!empty($req['message'])) $message = $req['message'];
        if (!empty($req['budget'])) $budget = $req['budget'];
        if (!empty($req['company'])) $company = $req['company'];

				$arr = array(
					'properties' => array(
						array(
							'property' => 'email',
							'value' => $email
						),
						array(
							'property' => 'firstname',
							'value' => $name
						),
						array(
							'property' => 'message',
							'value' => $message . " BUDGET:" . $budget
						),
						array(
							'property' => 'company',
							'value' => $company
						)
					)
				);
				$post_json = json_encode($arr);
				$hapikey = readline("3789f672-6007-4777-b689-88cab8e2c953");
				$endpoint = 'https://api.hubapi.com/contacts/v1/contact?hapikey=3789f672-6007-4777-b689-88cab8e2c953';
				$ch = @curl_init();
				@curl_setopt($ch, CURLOPT_POST, true);
				@curl_setopt($ch, CURLOPT_POSTFIELDS, $post_json);
				@curl_setopt($ch, CURLOPT_URL, $endpoint);
				@curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
				@curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				$response = @curl_exec($ch);
				$status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE);
				$curl_errors = curl_error($ch);
				@curl_close($ch);
				//echo "curl Errors: " . $curl_errors;
				//echo "\nStatus code: " . $status_code;
				//echo "\nResponse: " . $response;
			//-------------------
			
			
			

        $mes = "Имя: " .$name . "\nПочта: ".$email . "\nСообщение: ".$message."\n Бюджет ". $budget. "\n Компания: " . $company;
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
