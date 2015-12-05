<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'contato@andreabrantes.com'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Racing Day Nordeste Website:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "Você recebeu uma mensagem pelo form do RDN.\n\n"."Detalhes:\n\nName: $name\n\nPhone: $phone\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "De: contato@andreabrantes.com\n";
$headers .= "Responder: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>