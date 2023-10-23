import io from 'socket.io-client'   // Modulo de socket.io enfocado en aplicaciones de navegador
import { useState, useEffect } from 'react'   // Para crear estados
import { Mapa } from './mapa';
import { Footer } from './footer.jsx';

// Conexión con el backend
const socket = io("/")    // Este socket permite recibir información del backend



 function App() {
  const [message, setMessage] = useState('');   // 'message' es una variable, mientras que 'setMessage' es una función para ir actulizando esta variable de nombre 'message'
  const [messages, setMessages] = useState([]);


  const handleSubmit = (e) => {    // Esta función llamada 'handleSubmit' maneja el envio del formulario
    // Al ejecutarse el 'handleSubmit' este brinda un objeto con información del evento

    e.preventDefault();          //  Para prevenir que la página se actualice al dar clic en el boton de enviar del forumulario

    const newMessage = {    //  Este objeto de nombre 'newMessage' contendrá el mensaje del emisor 
      body: message,
      from: 'Me'
    }

    setMessages([...messages, newMessage]); // Esto permite que el emisor del mensaje visualice su propio mensaje en pantalla
    socket.emit('message', message);   // Con este 'socket' y el método 'emit' se envían los datos al backend
    // El primer 'message' en string es el nombre del evento que tiene el backend
    // El valor que tenga este 'message' será lo que el cliente haya escrito y se haya guardado en la variable 'message' que esta junto al 'string message' el cual es el nombre del 'evento'
  }

  // 'message': nombre del evento 
  // message: nombre de la variable


  useEffect(() => {                  // Este useEffect queda escuchando por eventos de sockets
    socket.on('message', receiveMessage);   // Cuando el useEffect escuche un evento de nombre 'message' recibirá los mensajes alacenados en la variable 'receiveMessage'

    return () => {
      socket.off('message', receiveMessage);  // Esta función apaga el evento anterior para impedir que se envíe 2 veces un mismo mensaje
    }
  }, []);




  const receiveMessage = (message) =>                 //  receiveMessage recibe el mensaje y desde ese mensaje con la función setMessages se copiará todo lo que tenga el estado.... 
    setMessages((state) => [...state, message]);   //  el estado que setMessages recibe copiará todo lo que tenga dentro y añadirá el nuevo message que esta recibiendo
  //  Esto mantiene el estado de los mensajes anteriormente enviados


  return (
    <>
      <Mapa/>

      <div className='container col-md-5 col-lg-4 order-md-last' >
        <div className='d-flex flex-column align-items-center' style={{color:'yellow'}}>
        
          <form onSubmit={handleSubmit}   //  'onSubmit' es para escuchar el evento del envio del formulario a través de una función en este caso la función se llama 'handleSubmit' 
            className='container mx-1 col-md-5 order-md-last text-warning d-flex flex-column overflow-y-auto' style={{border:'1px solid yellow',width: '300px', height: '175px', zIndex:'2'}}>
          
              

              {/*  // Se crea una lista de mensajes para mostrarlos por pantalla y no solo en consola */}

              <ul className='m-0 p-0'>
                {
                  messages.map((message, i) => (    // Cuando el <ul> se cree, esta función recorrerá la lista de mensajes y por cada mensaje que recorra se creará un <li>, este mismo contendrá el mensaje que se acaba de enviar
                  <li key={i} className={`d-flex flex-column m-2 form-control d-inline-block ${message.from === 'Me'} ${message.from === 'Me' ? ' bg-warning-subtle text-emphasis-warning me-auto border-bottom' : ' bg-success-subtle ms-auto'}`}>
                  
                      <span className='text-md text-slate-700 block'>{message.from}</span>  {/* Recibe un  */}
                      <span className='text-xl'>{message.body}</span>                       {/* arreglo de objetos */}
                    </li>


                  ))
                }
              </ul>


              <input className='form-control border border-warning d-block position' type="text" placeholder='Write your message ...'
                onChange={(e) => setMessage(e.target.value)} />   {/* 'onChange' permite capturar los cambios dentro del input y actualizar el valor que posee el mismo. */}
              {/* se recibe la información de este evento y desde el mismo evento se actualiza la variable 'message' con la función 'setMessage' mediante el metodo de 'target.value' */}


              <button className='m-2 btn btn-outline-light text-warning border border-warning'>
                Send
              </button>

            
          </form>
        </div>
      </div>

      <Footer/>
    </>
  );
}



export default App