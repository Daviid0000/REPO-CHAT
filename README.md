# Crear servidor frontend

* Ejecutar en la consola 'npm create vite '
 
* Dale un nombre al projecto.


* Elegir el framework para el frontend.


* Elegir el lenguaje en el que se trabajará.


* Dentro de la consola posicionate en la carpeta del proyecto recién creado.


* En la consola ejecuta 'npm i' para instalar todas las depenencias del servidor backend.


* Ejecuta en la consola 'npm run dev' para comprobar que el servidor frontend funcione.




* Luego del paso 12 ir a la carpeta del servidor frontend creado, abrir el archivo jsx y crea una estructura básica de react. 

Ejemplo:

import React from 'react'

function App(){
    return(
        <div>Hola mundo</div>
    )
}

export default


* Habiendo hecho la estructura básica, ejecuta 'socket.io-client' para comunicar el servidor backend con el servidor frontend.





* Ingresar al archivo vite.config.js que se encuentra en la carpeta del servidor frontend y configurar:

        server:{
            proxy:{
            '/socket.io': {
                target: "http://localhost:3000",
                ws: true
            }
            }
        }



dentro de:

        export default defineConfig({
        plugins: [react()],
  
  
        })


Esto se hace para evitar darle permiso mediante el 'cors' al servidor del frontend para que se conecte con el servidor del backend.



En el caso de darle permisos de cors se debe ingresar esto en una sección del archivo del servidor, más específico en la linea de código donde se crea un servidor de sockets.



cors: {
    origin: "aqui va el origen del servidor que se quiere  conectar al backend"
}




Ejemplo más claro, es esta linea de código:




const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})




#   R E P O - C H A T 
 
 