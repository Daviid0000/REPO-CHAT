5. Ejecutar en la consola 'npm create vite '


6. Dale un nombre al projecto.


7. Elegir el framework para el frontend.


8. Elegir el lenguaje en el que se trabajará.


9. Dentro de la consola posicionate en la carpeta del proyecto recién creado.


10. En la consola ejecuta 'npm i' para instalar todas las depenencias del servidor backend.


11. Ejecuta en la consola 'npm run dev' para comprobar que el servidor frontend funcione.


Ahora a comunicar ambos servidores (ir al index para seguir el siguiente paso)


13. Luego del paso 12 ir a la carpeta del servidor frontend creado, abrir el archivo jsx y crea una estructura básica de react. 

Ejemplo:

import React from 'react'

function App(){
    return(
        <div>Hola mundo</div>
    )
}

export default


14. Habiendo hecho la estructura básica, ejecuta 'socket.io-client' para comunicar el servidor backend con el servidor frontend.


Seguir el paso 15 en el archivo jsx.


17. Ingresar al archivo vite.config.js que se encuentra en la carpeta del servidor frontend y configurar:

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


Esto se hace para evitar darle permiso mediante el 'cors' al servidor del frontend para que se conecte con el servidor del backend.#   R E P O - C H A T  
 