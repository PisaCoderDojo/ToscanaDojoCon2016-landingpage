<?php
if (!empty($_POST["mail"]) && !empty($_POST["body"])) {

  $to = "pisa.it@coderdojo.com";
  $subject = "[dojocon-contact] ";
  $message = "From: ". $_POST["mail"] . " <br/><br/> " . $_POST["body"];
  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  // More headers
  //$headers .= "From: no-reply@sfcoding.com\r\n";
  $headers .= 'Reply-To: ' . $_POST["mail"] . "\r\n" .
  $ris = mail($to,$subject,$message,$headers);
  if($ris){
    echo 'true';
  }else{
    echo 'false';
  }
}
?>
