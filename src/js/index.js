(function () {
  $(document).ready(function () {

    const contactForm = document.querySelector('#moto-widget-contact_form-form');
    const submit = contactForm.querySelector('#button-submit');

    // submit.addEventListener('click', (event) => {
    $('#moto-widget-contact_form-form').submit((event) => {
      event.preventDefault();

      const name = $('#field_name').val();
      const email = $('#field_email').val();
      const phone = $('#field_phone').val();
      const message = $('#field_message').val();

      console.log(name);
      console.log(email);
      console.log(phone);
      console.log(message);

      $('#field_name').change(() => {
        if (!name) {
          $('.moto-widget-contact_form-name-error').show();
        }
      });
      $('#field_name').change(() => {
        if (!email) {
          $('.moto-widget-contact_form-email-error').show();
        }
      });
      $('#field_name').change(() => {
        if (!phone) {
          $('.moto-widget-contact_form-phone-error').show();
        }
      });
      $('#field_name').change(() => {
        if (!message) {
          $('.moto-widget-contact_form-message-error').show();
        }
      });
      if (name && email && phone && message) {
        console.log('Inside Ajax');
        $.post('https://formspree.io/ernestopguardia@gmail.com', {name: name, email: email, message: message})
        // $.ajax({
        //   url: "https://formspree.io/ernestopguardia@gmail.com",
        //   type: "POST",
        //   dataType: "json",
        //   crossDomain: true,
        //   // data: {
        //   //   emailTitle: "Tienes una solicitud de informacion",
        //   //   name: name,
        //   //   phone: phone,
        //   //   email: email,
        //   //   date: Date.now(),
        //   //   body: message,
        //   // },
        //   data: $(this).serialize(),
        //   success: function (result) {
        //     console.log('Email was sent');
        //     console.log(result);
        //     /*alert(result[0].status);*/
        //   },
        //   error: function (xhr, ajaxOptions, thrownError) {
        //     // console.error('Email error');
        //     alert('Error' + xhr + "****" + ajaxOptions + "****" + thrownError);
        //   }
        // });

        // submit.value = 'Sending..';

        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', '//formspree.io/ernestopguardia@gmail.com', true);
        // xhr.setRequestHeader("Accept", "application/json");
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // xhr.onloadend = function (res) {
        //   if (res.target.status === 200) {
        //     submit.value = 'Message sent!';
        //   } else {
        //     submit.value = 'Error!';
        //   }
        // }

        // const data = {
        //   date: Date.now(),
        //   name: name,
        //   phone: phone,
        //   email: email,
        //   message: message
        // }

        // xhr.send(data);
      }

      // Reset Form
      document.getElementById('moto-widget-contact_form-form').reset;
      // $(this).get(0).reset();
    });
  });
}());