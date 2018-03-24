(function () {

  function sendEmail(name, phone, email, message, direction) {
    $.ajax({
      url: "",
      crossDomain: true,
      dataType: "jsonp",
      data: {
        accion: "sendEmail",
        emailTitle: "Solicitud de informacion",
        emailTitleFrom: "",
        greeting: "Tienes una solicitud por gestionar:",
        name: name,
        phone: phone,
        email: email,
        date: new Date.now(),
        body: message,
        emailTo: direction
      },
      success: function (result) {
        /*alert(result[0].status);*/
      },
      error: function (xhr, ajaxOptions, thrownError) {
        /*alert('Error' + xhr + "****" + ajaxOptions + "****" + thrownError);*/
      }
    });
  }

}());