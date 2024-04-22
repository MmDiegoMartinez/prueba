<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maquina del Tiempo</title>
  <script src="js/aframe.min.js"></script>
  <link rel="stylesheet" href="css/Estilos.css">
</head>
<body>
    <div class="menu">
        <div class="formulario">
            <form action="" method="post">
              <label for="anio">Seleccione un periodo:</label>
              <select name="anio" id="anio">
                <option value="0">Periodo Precámbrico</option>
                <option value="1">Periodo Cretácico</option>
                <option value="2">Perido Pleistoceno</option>
                <option value="3">Actualidad</option>
                <option value="4">Periodo Futurista</option>
                <option value="5">Periodo Postapocalíptico </option>
              </select>
              <button type="submit">Viajar</button>
            </form>
          </div>
    </div>
  <a-scene>
    <!-- Cielo -->
    <a-sky color="#87CEEB"></a-sky>

    <!-- Campo infinito -->
    <a-entity>
      <a-plane rotation="-90 0 0" height="200" width="200" repeat="100 100" color="#3E8344"></a-plane>
    </a-entity>
    <!-- cronometro -->
    <a-assets>
      <a-asset-item id="maquina-modelo" src="Modelos/maquinadeltiempo.glb"></a-asset-item>
    </a-assets>


    <a-entity gltf-model="#maquina-modelo" scale="20 20 20" position="0 3 -5" rotation="0 0 0"></a-entity>


    <a-entity id="viajante" position="0 0 0" >
        <a-cylinder position="-3 1.35 -2" radius="0.32" height="0.8" rotation="0 90 0" material="src: url(img/ropa.png);" ></a-cylinder> <!-- Cuerpo -->
        <a-cylinder position="-2.81 0.8 -2" radius="0.14" height="0.3" rotation="0 90 0" material="src: url(img/fut/manganiupi.png);"></a-cylinder> 
        <a-cylinder position="-3.19 0.8 -2" radius="0.14" height="0.3" rotation="0 -90 0" material="src: url(img/fut/manganiupi.png);"></a-cylinder> 
        <a-cylinder position="-3.4 1.6 -2" radius="0.14" height="0.3" rotation="0 -90 0" color="#532182"></a-cylinder> <!-- MANGAS -->
        <a-cylinder position="-2.6 1.6 -2" radius="0.14" height="0.3" rotation="0 90 0" color="#532182"></a-cylinder> <!-- MANGAS -->       
        <a-cylinder position="-3.4 1.5 -2" rotation="0 190 0" radius="0.05" height="0.5" color="black"></a-cylinder> <!-- Brazo izquierdo -->
        <a-cylinder position="-2.6 1.5 -2" rotation="0 190 0" radius="0.05" height="0.5" color="black"></a-cylinder> <!-- Brazo derecho -->
        <a-sphere position="-3 2.09 -2" radius="0.3" rotation="0 -90 0" material="src: url(img/cara.png);" ></a-sphere> <!-- Cabeza -->
        <a-sphere position="-3.4 1.3 -2" radius="0.1" color="#E8BEAC"></a-sphere> <!-- Mano izquierda -->
        <a-sphere position="-2.6 1.3 -2" radius="0.1" color="#E8BEAC"></a-sphere> <!-- Mano derecha -->
        <a-cylinder id="leftLeg" position="-2.81 0.5 -2" rotation="0 0 0" radius="0.1" height="0.6" color="black"></a-cylinder> <!-- Pierna derecha -->
        <a-cylinder id="rightLeg" position="-3.19 0.5 -2" rotation="0 0 0" radius="0.1" height="0.6" color="black"></a-cylinder> <!-- Pierna izquierda -->
        <a-sphere position="-2.81 0.1 -2" radius="0.1" color="#E8BEAC"></a-sphere> 
        <a-sphere position="-3.19 0.1 -2" radius="0.1" color="#E8BEAC"></a-sphere> 
    </a-entity>


  </a-scene>
  <audio id="audio-maquina" src="Audios/maquinatiempo.mp3"></audio>

</body>
<?php
$selected_option = ""; // Reiniciar la variable a un valor vacío
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $selected_option = $_POST['anio'];
    if ($selected_option !== "") {
        // Si $selected_option tiene un valor, ejecuta el script
        echo '<script src="js/animacionMaquina.js"></script>';
    }
}
?>


    
</html>