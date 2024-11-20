import MessiStatusCodeCard from "./components/StatusCardMessi";

const infoCodes1xx = [
  { imagenSrc: 'https://martinoentregas.com.ar/wp-content/uploads/2021/07/VMDWQW4UFJCX7HGTYS7G6K7IUY.jpg', alt: 'Messi mostrando concentración', height: 100, width: 100, textCode: '100 Continue' },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrqWGoFYWFbfIt2KIo8TAj8odEVojvailoQ&s', alt: 'Messi listo para jugar', height: 100, width: 100, textCode: '101 Switching Protocols' },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSS9DzFeevn6bu4k_cesvX7Sbyiv6zSjWPQg&s', alt: 'Messi preparándose para la siguiente acción', height: 100, width: 100, textCode: '102 Processing' },
  { imagenSrc: 'https://www.cadena3.com/admin/playerswf/fotos/ARCHI_1044639.jpg', alt: 'Messi atento y listo para la indicación', height: 100, width: 100, textCode: '103 Early Hints' }
];


const infoCodes2xx = [
  { imagenSrc: 'https://nexodiario.com/wp-content/uploads/2017/07/messi.jpg', alt: 'Messi celebrando', height: 100, width: 100, textCode: '200 OK',description:"OK indica que la solicitud se realizó correctamente y la información solicitada se incluye en la respuesta. Este es el código de estado más habitual que se va a recibir." },
  { imagenSrc: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_3338,h_1877,x_509,y_69/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/12up_es_international_web/01h129db1qgy4y8bxy7q.jpg', alt: 'Messi triunfante', height: 100, width: 100, textCode: '201 Created',description:"" },
  { imagenSrc: 'https://pbs.twimg.com/media/FzRfDUNXwAA838Z.jpg', alt: 'Messi relajado, misión cumplida', height: 100, width: 100, textCode: '202 Accepted' },
  { imagenSrc: 'https://c.files.bbci.co.uk/A636/production/_120405524_messi.jpg', alt: 'Messi observando desde el banco', height: 100, width: 100, textCode: '203 Non-Authoritative Information' },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCif00lHH9XjzrfIDgtQKNk7jL6a0dFb1Aw&s', alt: 'Messi mirando en silencio', height: 100, width: 100, textCode: '204 No Content' },
  { imagenSrc: 'https://www.lanacion.com.ar/resizer/v2/lionel-messi-en-la-QJER6V6SFJCCXAO3NXPS2LZ5CI.jpg?auth=a0891bb1999d51662d2bbabe48a28c25dcea756bc1638a219143c78a58482abf&width=420&height=280&quality=70&smart=true', alt: 'Messi listo para otra jugada', height: 100, width: 100, textCode: '205 Reset Content' },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Wb3MHQuQIdf2ZsbVai4s42BhZClTinnh0g&s', alt: 'Messi con la pelota, listo para continuar', height: 100, width: 100, textCode: '206 Partial Content' },
  { imagenSrc: 'https://phantom-marca.unidadeditorial.es/cc82f2e92398ef475392a35f7f8ca94f/resize/828/f/jpg/assets/multimedia/imagenes/2022/12/18/16713930580033.jpg', alt: 'Messi reflexionando en el campo', height: 100, width: 100, textCode: '207 Multi-Status', description:"El código de estado 207 Multi-Status en el contexto de HTTP indica que la respuesta contiene información de múltiples recursos. Este código es utilizado principalmente en las respuestas de una solicitud PROPFIND de WebDAV (una extensión de HTTP que permite la gestión remota de archivos), aunque no es comúnmente utilizado fuera de este contexto." },
  { imagenSrc: 'https://rosariolaciudad.com.ar/assets/El-enojo-de-Messi-con-el-arbitro-por-lo-echar-a-Alderete.webp', alt: 'Messi repitiendo jugada', height: 100, width: 100, textCode: '208 Already Reported' },
  { imagenSrc: 'https://www.cadena3.com/admin/playerswf/fotos/ARCHI_1032289.jpg', alt: 'Messi revisando resultados', height: 100, width: 100, textCode: '226 IM Used' }
];

const infoCodes3xx = [
  { imagenSrc: 'https://www.elheraldo.hn/binrepository/1200x900/0c0/0d0/none/45933/XUGK/leo-messi-1_6175191_20231204105138.jpg', alt: 'Messi señalando a otro lugar', height: 100, width: 100, textCode: '301 Moved Permanently' },
  { imagenSrc: 'https://static.euronews.com/articles/stories/07/25/76/56/1200x675_cmsv2_ba4e9633-6949-5a7b-afe9-18b2978d5cff-7257656.jpg', alt: 'Messi cambiando de dirección', height: 100, width: 100, textCode: '302 Found' },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeDKcj7RfobKVdkzugEfKTNH7vqR640PAuA&s', alt: 'Messi dirigiendo la jugada hacia otra zona', height: 100, width: 100, textCode: '303 See Other' },
  { imagenSrc: 'https://www.elsoldemexico.com.mx/deportes/futbol/ka3n8q-collage-messi.jpg/ALTERNATES/LANDSCAPE_960/collage%20messi.jpg', alt: 'Messi manteniendo su posición', height: 100, width: 100, textCode: '304 Not Modified' },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpBKdrUJa2b5Dnjf2I7QWegNdev3IQcCnAw&s', alt: 'Messi siguiendo instrucciones temporales', height: 100, width: 100, textCode: '307 Temporary Redirect' },
  { imagenSrc: 'path/to/image308.jpg', alt: 'Messi cambiando permanentemente de estrategia', height: 100, width: 100, textCode: '308 Permanent Redirect' }
];


const infoCodes4xx = [
  { imagenSrc: 'https://www.ole.com.ar/2020/11/12/HQQdI36x1_386x280__1.jpg', alt: 'Messi confundido', height: 100, width: 100, textCode: '400 Bad Request' ,description:"El error 400 Bad Request es un código de estatus HTTP del cliente que aparece cuando un servidor no puede satisfacer un requerimiento. Suele ser ocasionado por errores en la URL, cookies del navegador corruptas, o extensiones del navegador que causan conflicto."},
  { imagenSrc: 'https://www.ole.com.ar/2019/11/05/2cQW90Gd_720x0__1.jpg', alt: 'Messi recibiendo tarjeta amarilla', height: 100, width: 100, textCode: '401 Unauthorized' },
  { imagenSrc: 'https://imgcdn.stablediffusionweb.com/2024/6/13/227d30be-bd46-49f7-926a-22b69fcfeb19.jpg', alt: 'Messi bloqueado en el área', height: 100, width: 100, textCode: '403 Forbidden' },
  { imagenSrc: 'https://media.diariouno.com.ar/p/4380cc95050e888ef8cb14da0eab1c08/adjuntos/298/imagenes/000/056/0000056995/pulga1.jpg', alt: 'Messi buscando el balón', height: 100, width: 100, textCode: '404 Not Found' },
  { imagenSrc: 'https://img.lagaceta.com.ar/fotos/notas/2017/04/19/726455_20170419170738.jpg', alt: 'Messi haciendo un movimiento no permitido', height: 100, width: 100, textCode: '405 Method Not Allowed', description:"El error 405 se produce cuando un cliente intenta utilizar un método HTTP no permitido por el servidor. Por ejemplo, este problema puede producirse cuando un usuario intenta utilizar un método como PUT o DELETE en un recurso que sólo permite peticiones GET o POST" },
  { imagenSrc: 'https://media.lacapital.com.ar/p/5a327600b476612391eb4d0209f542fd/adjuntos/205/imagenes/011/629/0011629911/642x0/smart/messi_borrachojpg.jpg', alt: 'Messi inconforme con la decisión', height: 100, width: 100, textCode: '406 Not Acceptable', description:"Este error (HTTP 406 No aceptable) significa que Internet Explorer pudo recibir información del sitio web visitado, pero el formato para mostrar esta información no era compatible con Internet Explorer." },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkihNYBPLKlQCEt92IelwcCy60dZAyB9XmHg&s', alt: 'Messi esperando una decisión', height: 100, width: 100, textCode: '408 Request Timeout' },
  { imagenSrc: 'https://www.losandes.com.ar/resizer/v2/GFQWCYRQGJQWEMTEMNTDMOBUMU.jpg?quality=75&smart=true&auth=4ec1c6f8e9f2308dc4eb3bca82df78056f616102965477473da33e634d5efea5&width=980&height=640', alt: 'Messi en conflicto con el árbitro', height: 100, width: 100, textCode: '409 Conflict',description:"El error 409 Conflict significa que el servidor no pudo completar la solicitud HTTP porque entra en conflicto con el estado actual del recurso de destino. En general, el error resulta de una solicitud PUT en conflicto con el estado del recurso en el servidor." },
  { imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bXaWo2mfgne2Re5SrB7tiOQ28FdqIbUXJw&s', alt: 'Messi despidiéndose de un estadio vacío', height: 100, width: 100, textCode: '410 Gone' },
  { imagenSrc: 'https://img.lagaceta.com.ar/fotos/notas/2016/08/12/694189_20160812130448.jpg', alt: 'Messi exhausto después de jugar sin descanso', height: 100, width: 100, textCode: '429 Too Many Requests',description:"El Error 429 es un código de estado HTTP que indica que el usuario ha enviado demasiadas solicitudes en un corto período de tiempo, y, por lo tanto, se le está limitando el acceso temporalmente. Este error es comúnmente conocido como Too Many Requests" }
];

const infoCodes5xx = [
  { imagenSrc: 'path/to/image500.jpg', alt: 'Messi decepcionado', height: 100, width: 100, textCode: '500 Internal Server Error' },
  { imagenSrc: 'path/to/image501.jpg', alt: 'Messi en desacuerdo con una estrategia inesperada', height: 100, width: 100, textCode: '501 Not Implemented' },
  { imagenSrc: 'path/to/image502.jpg', alt: 'Messi confundido por una jugada inesperada', height: 100, width: 100, textCode: '502 Bad Gateway' },
  { imagenSrc: 'path/to/image503.jpg', alt: 'Messi sentado en la banca', height: 100, width: 100, textCode: '503 Service Unavailable' },
  { imagenSrc: 'path/to/image504.jpg', alt: 'Messi esperando una jugada que no llega', height: 100, width: 100, textCode: '504 Gateway Timeout' },
  { imagenSrc: 'path/to/image505.jpg', alt: 'Messi frustrado con la estrategia de juego', height: 100, width: 100, textCode: '505 HTTP Version Not Supported' }
];
const text = "este es el texto que explica los metodos"

function App() {
  return (
    <div className="flex flex-col  bg-opacity-50 w-full h-full  gap-4 py-8">
      <header className="flex  items-center text-center gap-6 mb-10 py-8 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient">HTTP MESSI</span>
        </h1>
        <h2 className="text-3xl font-medium text-gray-200 uppercase tracking-wide shadow-text">
          STATUS CODE
        </h2>
      </header>


      <main className="flex flex-col items-center gap-8 mt-8 w-[80vw] mx-auto">
        <section className="flex flex-row items-start justify-center ">
          <h2 className="text-gray-300 max-w-md border-2  bg-orange-500 bg-opacity-40">
            Explora y comprende los códigos de estado HTTP, explicado de forma clara, directa y con estilo.
          </h2>
          <div>
        <div>
          <ul className="flex items-start justify-center gap-8 mt-4 w-[60vw] border-2">
            <li className="text-lg font-semibold text-gray-200 hover:text-white transition-all duration-300 cursor-pointer">
              Métodos
            </li>
            <li className="text-lg font-semibold text-gray-200 hover:text-white transition-all duration-300 cursor-pointer">
              Peticiones
            </li>
            <li className="text-lg font-semibold text-gray-200 hover:text-white transition-all duration-300 cursor-pointer">
              Respuestas
            </li>
          </ul>
          <textarea className="w-[59.5vw] h-[33.2rem] bg-black text-white bg-opacity-70 p-10">
            {text}
          </textarea>
          <div className="w-full h-10rem p-5 flex justify-center items-center">
            <input  type="text" placeholder="haceme una pregunta"/>
            <button className="bg-primary:hover:bg-secondary text-white font-bold py-2 px-4 rounded">preguntar!</button>
          </div>
        </div>
          </div>
        </section>

        <h3 className="text-xl text-white font-semibold mb-4">Respuestas INFORMATIVAS</h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCodes1xx.map((code, index) => (
            <MessiStatusCodeCard key={index} {...code} />
          ))}
        </section>

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">Respuestas de EXITO</h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCodes2xx.map((code, index) => (
            <MessiStatusCodeCard key={index} {...code} />
          ))}
        </section>

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">Respuestas de REDIRECCION</h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCodes3xx.map((code, index) => (
            <MessiStatusCodeCard key={index} {...code} />
          ))}
        </section>

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">Errores del CLIENTE</h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCodes4xx.map((code, index) => (
            <MessiStatusCodeCard key={index} {...code} />
          ))}
        </section>

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">Errores del SERVIDOR</h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCodes5xx.map((code, index) => (
            <MessiStatusCodeCard key={index} {...code} />
          ))}
        </section>
      </main>
    </div>
  )
}


export default App;
