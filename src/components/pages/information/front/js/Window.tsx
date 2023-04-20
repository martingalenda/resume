import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Window = () => { 

    return (
        <Information subTopic={data.menu[0].array[3].array[9]}>

            <TopicContainer id="general" topic="General" ytUrl="https://youtu.be/xOinGb2MZSk?t=445">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`const youtubeURL = "https://www.youtube.com/watch?v=xOinGb2MZSk";
// Carga una nueva pestaña con la página en cuestión
    const vista = window.open(youtubeURL); 
// Carga una nueva página como open, pero en la misma pestaña (reemplazando, no abre una nueva)
    window.location.assign(youtubeURL); 
// Cierra una vista
    vista.close(); 
// Deja de cargar la vista (stop de los navegadores)
    vista.stop(); 
// Actualiza la página
    window.location.reload() 
// Propiedad closed: Retorna booleano si esta cerrada o no la vista
    console.log(vista.closed); 


// Manda un mensaje de alerta (default de los navegadores)
    alert("Mensaje de Alerta!"); 
// Abre una vista para imprimir un documento
    print(); 
// Abre un modal con un campo de texto para que el usuario ingrese datos. (Devuelve string)
    prompt("Ingrese su nombre: "); 

const respuesta = confirm("Esta seguro que desea guardar cambios?"); // OK devuelve true, CANCEL devuelve false
console.log(respuesta);`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="screen" topic="Propiedad Screen" ytUrl="https://youtu.be/xOinGb2MZSk?t=817">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`console.log(screen.height); // Devuelve el alto del MONITOR ("valor fijo" en px)
console.log(screen.availHeight); // Devuelve el alto disponible en el MONITOR ("valor fijo" en px)
console.log(outerHeight); // Devuelve el alto del NAVEGADOR (valor variable en px)
console.log(innerHeight); // Devuelve el alto del VIEWPORT (valor variable en px)
console.log(scrollX) // Devuelve el valor desplazado sobre el eje horizontal, en pixeles.
console.log(scrollY) // Devuelve el valor desplazado sobre el eje vertical, en pixeles.
console.log(screenLeft); // Devuelve la distancia del navegador respecto al lado izquierdo de la pantalla
console.log(screenTop); // Devuelve la distancia del navegador respecto al lado superior de la pantalla`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="location" topic="Propiedad location" ytUrl="https://youtu.be/xOinGb2MZSk?t=1773">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`window.location.href; 
// Devuelve el href (URL completo) de la página actual = 'https://www.youtube.com/watch?v=xOinGb2MZSk&t=515s'
window.location.hostname; // Devuelve el valor del hostname/dominio del servidor web = 'www.youtube.com'
window.location.pathname; // Devuelve el valor del pathname = '/watch'
window.location.hash; // Devuelve el valor del hash = '#usuario'
window.location.protocol; // Devuelve el protocolo web utilizado (http, file, https:) = 'https:'`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="history" topic="Propiedad history" ytUrl="https://youtu.be/P5VxI53U_WI?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=657">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`console.log(history)
console.log(history.length) // Almacena la cantidad total de paginas visitadas en la pestaña
history.back(3) // Regresa (x) paginas atras
history.forward(1) // Adelanta (x) paginas
history.go(-1) // Mezcla de back y forward, (negativos hacia atras) | (positivos hacia adelante)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="navigator" topic="Propiedad navigator" ytUrl="https://youtu.be/P5VxI53U_WI?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=1048">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`console.log(navigator)
console.log(navigator.language) // Devuelve el idioma del navegador
console.log(navigator.onLine) // Detecta si el usuario pierde la conexión a internet
console.log(navigator.mediaDevices) // Dispositivos como microfono, camara...
console.log(navigator.storage) // Local / web storage
console.log(navigator.geolocation) // API de geolocalizacion
console.log(navigator.serviceWorker) 
// Sirve para convertir un sitio web en una aplicacion progresiva de escritorio`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="input" topic="Propiedad input">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`const input = document.querySelector(".input")
console.log(input.value) // Muestra el valor (texto) introducido en el input
input.minLength = 5 // El input requiere un mínimo de 5 caracteres

input.type = "file" // Asignamos el tipo de input a selección de archivos
console.log(input.type) // Muestra el tipo de input, por ej: number, email, range, color, etc
input.accept = "image/png" // Declaramos que solo acepte imagenes png a a la hora de subir archivos

input.type = "submit"
input.form = "idForm" // Vincula el botón tipo submit con el formulario que posea la id (idForm)

input.placeholder = "texto" // Imprime en el imput un valor inicial (placeholder)
input.required = "true" // Campo requerido/obligatorio`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="document" topic="Propiedad document (DOM)">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`// document sería la raiz del "arbol genealogico HTML (DOM)"
console.log(document) // Mapea toda la estructura del DOM de la página completa
console.log(document.head) // Devuelve la estructura del head de la página (HTML)
console.log(document.body) // Devuelve la estructura del body de la página (HTML)
console.log(document.documentElement) // Devuelve la estructura del html (la etiqueta html, sin el DOCTYPE)
console.log(document.title) // Devuelve el título de la página html
console.log(document.links) // Devuelve un array con todos los enlaces de la página
console.log(document.images) // Devuelve un array con todas las imagenes de la página`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Window