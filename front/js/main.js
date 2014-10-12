(function () {
  $('#contacto').on('submit', function (evt) {
    evt.preventDefault();

    var datos = {
      nombre: $('#contacto-nombre').val(),
      email: $('#contacto-email').val(),
      asunto: $('#contacto-asunto').val(),
      mensaje: $('#contacto-mensaje').val()
    };

    $.ajax({
      type: 'POST',
      url:'./contacto',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      timeout: 10000,
      data: JSON.stringify(datos),
      complete: function () {
        $('.alert').fadeIn().removeClass('hidden');

        $('#contacto-nombre').val('');
        $('#contacto-email').val('');
        $('#contacto-asunto').val('');
        $('#contacto-mensaje').val('');
      }
    });
  });
})();