var socket = io();

        socket.on('connect', function(){
            console.log('Conectado al servidor');
        });

        // On es para esuchar procesos
        socket.on('disconnect', function (){
            console.log('Perdimos conexion con el servidor');
        });

        // Emit es para enviar informacion
        // Enviar informacion
        socket.emit('enviarMensaje', {
            // usuario: 'Fernando',
            mensaje: 'Hola Mundo'
        }, function (resp){
            console.log('respuesta server: ',resp);
        });

        // Escuchar informacion
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor: ', mensaje);
        });