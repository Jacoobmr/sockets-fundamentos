var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//Escuchar informacion Propiedad "ON"
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor  ');
});

// Los Emits son para enviar informacion.
socket.emit('enviarMensaje', {
    usuario: 'Christian',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta Server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});