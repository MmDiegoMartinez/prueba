function animarMovimiento() {
    var audioMaquina = document.getElementById('audio-maquina');
audioMaquina.play();
    var viajante = document.getElementById('viajante');
    var maquina = document.querySelector('[gltf-model="#maquina-modelo"]');
    var posicionInicialViajante = { x: 0, y: 0, z: 0 }; // Posición inicial del viajante
    var posicionIntermediaViajante = { x: 3, y: 0, z: 1.5 }; // Posición intermedia del viajante
    var posicionFinalViajante = { x: 3, y: 2, z: 1.5 }; // Posición final del viajante
    var duracionTotalViajante = 3000; // Duración total del movimiento del viajante en milisegundos
    var pasoViajante = 10; // Intervalo de tiempo entre cada paso del viajante en milisegundos
    var tiempoPasadoViajante = 0;

    // Función para mover el viajante
    function moverViajante() {
        // Calcula la posición actual del viajante
        var x = posicionInicialViajante.x + (posicionIntermediaViajante.x - posicionInicialViajante.x) * (tiempoPasadoViajante / duracionTotalViajante);
        var y = posicionInicialViajante.y + (posicionIntermediaViajante.y - posicionInicialViajante.y) * (tiempoPasadoViajante / duracionTotalViajante);
        var z = posicionInicialViajante.z + (posicionIntermediaViajante.z - posicionInicialViajante.z) * (tiempoPasadoViajante / duracionTotalViajante);

        // Actualiza la posición del viajante
        viajante.setAttribute('position', x + ' ' + y + ' ' + z);

        // Incrementa el tiempo pasado del viajante
        tiempoPasadoViajante += pasoViajante;

        // Si el tiempo pasado del viajante es menor que la duración total, sigue moviendo
        if (tiempoPasadoViajante < duracionTotalViajante) {
            setTimeout(moverViajante, pasoViajante);
        } else {
            // Cuando el viajante alcanza su posición final, comienza a mover la máquina del tiempo
            moverMaquina();
        }
    }

    // Función para mover la máquina del tiempo y al viajante al mismo tiempo
    function moverMaquina() {
        var posicionInicialMaquina = { x: 0, y: 3, z: -5 }; // Posición inicial de la máquina del tiempo
        var posicionFinalMaquina = { x: 0, y: 15, z: -5 }; // Posición final de la máquina del tiempo
        var duracionTotalMaquina = 3000; // Duración total del movimiento de la máquina del tiempo en milisegundos
        var pasoMaquina = 10; // Intervalo de tiempo entre cada paso de la máquina del tiempo en milisegundos
        var tiempoPasadoMaquina = 0;

        // Función para mover la máquina del tiempo
        function mover() {
            // Calcula la posición actual de la máquina del tiempo
            var x = posicionInicialMaquina.x + (posicionFinalMaquina.x - posicionInicialMaquina.x) * (tiempoPasadoMaquina / duracionTotalMaquina);
            var y = posicionInicialMaquina.y + (posicionFinalMaquina.y - posicionInicialMaquina.y) * (tiempoPasadoMaquina / duracionTotalMaquina);
            var z = posicionInicialMaquina.z + (posicionFinalMaquina.z - posicionInicialMaquina.z) * (tiempoPasadoMaquina / duracionTotalMaquina);

            // Actualiza la posición de la máquina del tiempo
            maquina.setAttribute('position', x + ' ' + y + ' ' + z);

            // Calcula la posición actual del viajante
            var vy = posicionFinalViajante.y + (15 - posicionFinalViajante.y) * (tiempoPasadoMaquina / duracionTotalMaquina);

            // Actualiza la posición del viajante
            viajante.setAttribute('position', posicionFinalViajante.x + ' ' + vy + ' ' + posicionFinalViajante.z);

            // Incrementa el tiempo pasado de la máquina del tiempo
            tiempoPasadoMaquina += pasoMaquina;

            // Si el tiempo pasado de la máquina del tiempo es menor que la duración total, sigue moviendo
            if (tiempoPasadoMaquina < duracionTotalMaquina) {
                setTimeout(mover, pasoMaquina);
            } else {
                // Cuando la máquina del tiempo llega a su posición final, desaparece junto con el viajante
                desvanecerElemento(maquina);
                desvanecerElemento(viajante);
            }
        }

        // Función para desvanecer un elemento gradualmente y mostrar un destello de luz
        function desvanecerElemento(elemento) {
            
            var opacidad = 1;
            var pasoDesvanecimiento = 0.05;
            var duracionDesvanecimiento = 1000;
            var destello = document.createElement('a-entity');
            destello.setAttribute('geometry', 'primitive: sphere; radius: 0.1');
            destello.setAttribute('material', 'color: white; opacity: 0; transparent: true');
            elemento.appendChild(destello);

            // Función para reducir gradualmente la opacidad del elemento y aumentar el tamaño del destello
            function desvanecer() {
                opacidad -= pasoDesvanecimiento;
                elemento.setAttribute('opacity', opacidad);
                destello.setAttribute('material', 'opacity', (1 - opacidad));
                destello.setAttribute('scale', { x: 1/opacidad, y: 1/opacidad, z: 1/opacidad });

                if (opacidad > 0) {
                    setTimeout(desvanecer, duracionDesvanecimiento * pasoDesvanecimiento);
                } else {
                    elemento.setAttribute('visible', false); // Hace que el elemento no sea visible
                }
                
            }
            
            // Comienza el desvanecimiento
            desvanecer();
        }

        // Comienza el movimiento de la máquina del tiempo
        mover();
    }

    // Comienza el movimiento del viajante
    moverViajante();
}

// Llama a la función para iniciar la animación del movimiento del viajante y la máquina del tiempo
animarMovimiento();