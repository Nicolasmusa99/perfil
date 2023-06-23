<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  // Configurar el correo electrónico
  $destinatario = 'nicolasmusa.nm@gmail.com';
  $asunto = 'Nuevo mensaje de contacto';

  // Construir el cuerpo del correo electrónico
  $cuerpo = "Nombre: $nombre\n";
  $cuerpo .= "Email: $email\n";
  $cuerpo .= "Mensaje:\n$mensaje\n";

  // Enviar el correo electrónico
  if (mail($destinatario, $asunto, $cuerpo)) {
    echo 'El mensaje ha sido enviado exitosamente.';
  } else {
    echo 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
  }
}
?>
