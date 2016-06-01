$(document).ready( function(){
  $("#contact-send").click(function(){
      var data  ={
        mail: $("#contact-mail").val(),
        body: $("#contact-body").val()
      };
      console.log(data);

      if(data.body && data.mail && isValidEmailAddress(data.mail)){
          $("#contact-form").hide();
          $("#contact-loading").show();
          $('#contact-error').text('')
          $.post('/php/sendMail.php', data, function(data) {
            if(data=="true"){
              console.log("Mail inviata")
              $("#contact-loading").hide();
              $("#contact-response").show();
            } else {
              $("#contact-loading").show();
                $("#contact-form").show();
                $('#contact-error').text('Si è verificato un errore')
                console.log("errore di invio")
              }
          })
      }
      else{
        $('#contact-error').text("Error: Email non valida o vuota")
      }
  }
)});


function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  return pattern.test(emailAddress);
};
