/**
 * Creamos un server estatico que pasa un archivo html
 */

// Importar el módulo http de Node.js para crear el servidor HTTP
const http = require('http');
// Importar el módulo fs de Node.js para trabajar con el sistema de archivos
const fs = require('fs');

// Crear un servidor HTTP utilizando el método createServer del módulo http
const server = http.createServer((req, res) => {
  // Leer el contenido del archivo index.html de forma síncrona utilizando el módulo fs
const file = fs.readFileSync(__dirname + '/index.html');
  // Configurar la respuesta HTTP con el código de estado 200 (OK) y el tipo de contenido text/html
res.writeHead(200, {
'Content-Type': 'text/html; charset=UTF-8'
});
  // Enviar el contenido del archivo como cuerpo de la respuesta
res.end(file);
});

// Escuchar en el puerto 3000 y mostrar un mensaje cuando el servidor esté listo para recibir solicitudes
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
