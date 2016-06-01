
console.log("prima")
$(document).ready( function(){
  console.log("redy");
  $("#contact-send").click(function(){
      console.log("chiamatao");
      var data  ={
        mail: $("#contact-mail").val(),
        body: $("#contact-body").val()
      };
      console.log(data);
      if(data.body && data.mail && isValidEmailAddress(data.mail)){
          $.post('/php/sendMail.php', data, function(data) {
            if(data=="true"){
              console.log("Mail inviata")
            }
            else {
                console.log("errore di invio")
              }
          })
      }
  }
)});


function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        return pattern.test(emailAddress);
    };
