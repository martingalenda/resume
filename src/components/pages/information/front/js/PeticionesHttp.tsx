import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const PeticionesHttp = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[14].subTopic}>
            
            <TopicContainer id="ajax" topic="Ajax (Javascript ASÍNCRONO) - Introducción" ytUrl="https://www.youtube.com/watch?v=lN43CTpbWTU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=106&pp=iAQB"><br/>
            <h4>Definición</h4>
            <p>AJAX: Asynchronous JavaScript And XML. En pocas palabras es el uso del objeto XMLHttpRequest</p>
                <ul>
                    <li>Intermediario de solicitudes HTTP entre el servidor y la interface de usuario (El cliente)</li>
                    <li>Permite leer datos de un servidor una vez que haya cargado la página, sin tener que recargar el navegador (la página completa) por cada solicitud</li>
                </ul>  
            <p>AJAX no es una tecnología en sí misma. En realidad, se trata de varias tecnologías independientes que se unen:</p>
            <ul>
                <li>HTML y CSS, para crear una presentación basada en estándares.</li>
                <li>DOM, para la interacción y manipulación dinámica de la presentación.</li>
                <li>HTML, XML y JSON, para el intercambio y la manipulación de información.</li>
                <li>XMLHttpRequest o Fetch, para el intercambio asíncrono de información.</li>
                <li>JavaScript, para unir todas las demás tecnologías.</li>
            </ul>  <br/>

            <h4>VERBOS/METODOS/OPERACIONES PRINCIPALES/BÁSICAS DE LAS PETICIONES TIPO: (REST).</h4>
            <p>Las <strong>peticiones tipo REST</strong> (Representational State Transfer) son un conjunto de operaciones básicas que se utilizan para interactuar con los recursos de un sistema. Estas operaciones son:</p>
            <ul>
                <li><strong>GET</strong>: Nos permite obtener un recurso o dato (Equivale a la CRUD Operation SELECT de SQL).</li>
                <li><strong>POST</strong>: Nos permite enviar datos (Equivale a la CRUD Operation INSERT de SQL).</li>
                <li><strong>PATCH/PUT</strong>: Nos permite aplicar modificaciones/actualizaciones (Equivale a la CRUD Operation UPDATE de SQL).</li>
                <li><strong>DELETE</strong>: Nos permite eliminar un recurso o dato (Equivale a la CRUD Operation DELETE de SQL).</li>
            </ul>  
            
            <hr/>
            <em>Para testeo se requiere de un servidor (xamp/htdocs)</em><br/><br/>
            <span> Api de prueba utilizada en los ejemplos: <a href="https://jsonplaceholder.typicode.com/" target="_blank">https://jsonplaceholder.typicode.com/</a></span><br/>
            <span> Link de Json Server: <a href="https://github.com/typicode/json-server" target="_blank">https://github.com/typicode/json-server</a></span><br/>
            <span> Para ejecutar json server desde la consola: json-server -w -p (puerto) ./ruta/archivo.json  (json-server -w -p 5000 ./db.json) </span><br/>
            </TopicContainer>
            <TopicContainer id="http_request" topic="Objeto XMLHttpRequest (Anticuado)" ytUrl="https://www.youtube.com/watch?v=6CQrK1sS7WA&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=107&pp=iAQB">
            <p>Propiedades del objeto XMLHttpRequest:</p>
            <ul>
                <li><strong>response</strong>: Hace referencia al contenido de la petición.</li>
                <li><strong>responseText</strong>: Hace referencia al contenido de la petición __.</li>
                <li><strong>readyState</strong>: Estado de las peticiones. Valores posibles:.</li>
                <ul>
                    <li>(0) No inicializado.</li>
                    <li>(1) La solicitud se creo correctamente y esta cargando.</li>
                    <li>(2) Se envio/cargo la peticion correctamente.</li>
                    <li>(3) Peticion en proceso/interactiva.</li>
                    <li>(4) Se recibio/completo una respuesta a la peticion.</li>
                </ul> 
                <li><strong>status</strong>: Valores posibles de estados: <a href="https://jsonplaceholder.typicode.com/" target="_blank">https://developer.mozilla.org/es/docs/Web/HTTP/Status</a>
                </li>
                <ul>
                    <li>200/202- Estado correcto.</li>
                    <li>404- No se encontro el archivo.</li>
                    <li>403- No se tiene acceso al recurso.</li>
                </ul> 
            </ul>  <br/>
            
                <h4>EJ1: Básico de petición GET</h4>  
                <CodeBox lang="javascript"> 
                    {
`let peticion = null

// 1 - Instanciamos el objeto AJAX:
    if (window.XMLHttpRequest) { peticion = new XMLHttpRequest() }
// Igualamos la variable peticion dependiendo el tipo de navegador que este utilizando el usuario. (Esto cubre Internet Explorer)
    else peticion = new ActiveXObject("Microsoft.XMLHTTP") 

// 2 - Abrimos la peticion con el metodo open + (verbo, url o archivo local):
    peticion.open("GET", "https://jsonplaceholder.typicode.com/users")
    // peticion.open("GET", "./data.json") // PARA PRUEBA LOCAL
// 3 - Enviamos la petición:
    peticion.send() 

// 4 - Manejamos el / los eventos con la funcionalidad requerida
// Solo responde cuando el status es 200, y el readyState es 3 minimo.
    peticion.addEventListener("load", ()=> {
        console.log(peticion.response) 
        // console.log(peticion.readyState) 
        // console.log(peticion.status) 

    const json = JSON.parse(peticion.responseText) // Convertimos la respuesta en formato JSON
    console.log(json[1].name)
    })


// Info adicional:
// En este modo tradicional de hacer una petición, en lugar de "load" algunos utilzian "readystatechange"
// Suele utilizarse para hacer dos validaciones esenciales antes de imprimir la respuesta de la petición
// Por un lado el readyState debe ser distinto de (4), el estado que hace referencia a que se completo la petición, y por otro el status que debe ser ( >= 200 && < 300 ), que hace referencia a que ha sido resuelta de forma exitosa.
    
    peticion.addEventListener("readystatechange", (e) => {
        if (peticion.readyState !== 4) return; // Si es distinto a 4, finaliza la función con el return

        console.log(peticion)

        if (peticion.status >= 200 && peticion.status < 300) {
            const json = JSON.parse(peticion.responseText) // Convertimos la respuesta en formato JSON
            console.log(json[1].name)
            console.log("Éxito")
        } else {
            console.log("Error")
        }
    })`
}
</CodeBox>
<h4>EJ2: CRUD API REST CON JSON-SERVER</h4> 
<p>Video de este ejemplo completo: <a href="https://www.youtube.com/watch?v=FGBm1fjNMhI&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=116" target="_blank"> https://www.youtube.com/watch?v=FGBm1fjNMhI&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=116 </a></p> 
<p>El archivo de este ejemplo esta en: ./peticionesAsincronas/CRUD_Ajax.html</p>

            </TopicContainer>
            <TopicContainer id="fetch" topic="Api Fetch">
                <p>API Fetch es una interfaz nativa de JavaScript que permite realizar peticiones HTTP asíncronas (AJAX) y obtener recursos de manera dinámica desde una URL determinada. Es una alternativa moderna y más fácil de usar que el objeto XMLHttpRequest de AJAX</p> <br/> 
                <h4>EJ1: MÉTODO/VERBO GET: Sin async / await</h4> 
                <p>Video de este ejemplo completo: <a href="https://www.youtube.com/watch?v=dYB1UlGGmfk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=108 " target="_blank"> https://www.youtube.com/watch?v=dYB1UlGGmfk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=108  </a></p> 
                <CodeBox lang="javascript"> 
                    {
`const url = 'https://jsonplaceholder.typicode.com/users' // Url a la que haremos la petición
// const url = './data.json' // También funciona sin problemas con archivos locales
        
// Hacemos una petición con fetch, recibimos una respuesta cual si fuese una promesa.
// Por lo que la manipulamos como tal (then/catch/finally). 
// En este ejemplo, la primer respuesta capturada con then es un objeto,
// cuya propiedad body es: ("ReadableStream"), por lo que debemos transformarlo a json.
    fetch(url)
        .then(response => {
            // console.log(response) // Así recibimos la primer respuesta de la promesa con la prop body: ("ReadableStream")
            // Si la prop (.ok) de la respuesta es verdadera, retorno la respuesta transformada en formato json (con el metodo propio de la API Fetch .json)
            // Caso contrario, rechazo la promesa (con el metodo reject del objeto Promise) para poder capturar/manipular el error con (.catch)
            return response.ok ? response.json() : Promise.reject(response)
        }) 
        .then(data => console.log(data)) // Imprimo la respuesta transformada (el .json)
        .catch((error) => {
            // console.log(error)
            let message = error.statusText || \`Algo salió mal. Catch error: \${error.status}\`
            console.log(message) // Control de errores
        }) 
        .finally(() => console.log("Me ejecuto siempre"))`
    }
    </CodeBox>
    <h4>EJ2: METODO/VERBO GET: Con async / await</h4> 
    <p>Video de este ejemplo completo: <a href="https://www.youtube.com/watch?v=GP8OCiJLeN4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=109 " target="_blank"> https://www.youtube.com/watch?v=GP8OCiJLeN4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=109  </a></p> 
<CodeBox lang="javascript"> 
    {
`const getData = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        // const url = './data.json' // También funciona de forma local
        let response = await fetch(url); // Esperamos la respuesta de la peticion fetch
        let data = await response.json(); // Esperamos la transformación de la respuesta a formato json
        // console.log(response) // Imprimimos la respuesta
    
        // Controlamos que la respuesta sea verdadera, caso contrario, le enviamos los errores al catch.
        // Recordatorio: throw es utilizado para enviarle parametros y el control de flujo al metodo catch
        if (!response.ok) throw {
            status: response.status,
            statusText: response.statusText
        }
    
        console.log(data); // Imprimimos la respuesta en json
    
    }
    catch (error) {
        let message = error.statusText || \`Algo salió mal. Catch error: \${error.status}\`
        console.log(message) // Control de errores
    }
    finally {
       // console.log("Me ejecuto siempre")
    }           
}

getData()`
}
</CodeBox>
<h4>EJ3: CRUD API REST CON JSON-SERVER con async await</h4> 
<p>Video de este ejemplo completo: <a href="https://www.youtube.com/watch?v=dmkzieeLibk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=118" target="_blank"> https://www.youtube.com/watch?v=dmkzieeLibk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=118 </a></p> 
<p>El archivo de este ejemplo esta en: ./peticionesAsincronas/CRUD_Fetch.html</p>
            </TopicContainer>
            <TopicContainer id="axios" topic="Libreria Axios">
            <p>Axios es una librería de JavaScript que se utiliza para realizar solicitudes HTTP (peticiones AJAX) desde el navegador o desde Node.js. Proporciona una interfaz fácil de usar para realizar solicitudes HTTP y manejar respuestas en una aplicación web o móvil.<br/><br/> 

            Axios admite todas las solicitudes HTTP comunes, como GET, POST, PUT, DELETE, PATCH, etc. y también admite solicitudes con datos JSON, formularios y datos de archivo. Además, Axios proporciona características avanzadas como la cancelación de solicitudes, la interceptación de solicitudes y respuestas, la autenticación y la gestión de errores.<br/><br/> 

            Axios se puede utilizar tanto en navegadores como en Node.js y es compatible con todas las principales plataformas web y móviles. Es fácil de integrar con marcos y bibliotecas de JavaScript como React, Vue, Angular y muchos más.</p> <br/> 
                <h4>EJ1: METODO/VERBO GET: Sin async / await</h4> 
                <p>Video de este ejemplo completo: <a href="https://www.youtube.com/watch?v=uxsEZgkcvFU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=110" target="_blank"> https://www.youtube.com/watch?v=uxsEZgkcvFU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=110 </a></p> 
                <CodeBox lang="javascript"> 
                    {
`const url = 'https://jsonplaceholder.typicode.com/users'
// const url = './data.json' // También funciona de forma local

axios(url)
    .then((response) => { 
        // console.log(response) // Así nos brinda la respuesta AXIOS
        const data = response.data // Esta librería parsea directamente a formato json, por lo que no es necesario trasnformar el tipo de dato
        console.log(data)
    })
    .catch((error) => {
        let message = error.response.statusText || "Ocurrió un error"
        console.log("Catch error:", error.response.status, message)
    })
    .finally(console.log("Me ejecuto siempre"))`
}
    </CodeBox>
    <h4>EJ2: METODO/VERBO GET: Con async / await</h4> 
    <p>Video de este ejemplo completo: <a href="https://www.youtube.com/watch?v=SBr_EVNErPk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=111" target="_blank"> https://www.youtube.com/watch?v=SBr_EVNErPk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=111 </a></p> 
<CodeBox lang="javascript"> 
    {
`const getData = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        // const url = './data.json' // También funciona de forma local
        const response = await axios(url);
        const data = await response.data;
        console.log(data);
    }
    catch(error) {
        let message = error.response.statusText || "Ocurrió un error"
        console.log("Catch error:", error.response.status, message)
    }
    finally {
      // console.log("Yo me ejecuto siempre")
    }
}

getData();`
}
</CodeBox>
<h4>EJ3: CRUD API REST CON JSON-SERVER con async await</h4> 
<p>Video de este ejemplo completo: </p> 
<p>El archivo de este ejemplo esta en: ./peticionesAsincronas/CRUD_Axios.html</p>
            </TopicContainer>
        </Information>
    )
}

export default PeticionesHttp