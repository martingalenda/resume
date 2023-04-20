import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Events = () => { 

    return (
        <Information subTopic={data.menu[0].array[3].array[10]}>

            <TopicContainer id="general" topic="Eventos - Métodos generales" ytUrl="https://youtu.be/xOinGb2MZSk?t=6741">
                <p>Una función manejadora de eventos no puede recibir otro parametro más que el default (event).<br/> 
                Si quisieramos enviar un parametro adicional, deberíamos utilizar una arrow function onClick={`{(e) => handlerEvent(e, paramX)}`}
                </p> 
                <h4>addEventListener - removeEventListener</h4> 
                <small>Estos métodos quedan "obsoletos" en React, ya que React utiliza lo que se conoce como Eventos sintéticos.</small>
                <p>Video-tutorial: <a href="https://youtu.be/xOinGb2MZSk?t=6842" target="_blank"> https://youtu.be/xOinGb2MZSk?t=6842 </a></p> 
                
                <CodeBox lang="javascript"> 
                    {
`const button = document.getElementById("accionar"); 

// Funciones que ejecuta la función manejadora del evento:
    const saludar = (nombre = "Desconocid@") => {
        console.log(\`Hola \${nombre}\`)
    }
    const test = (event) => {
        console.log(event.target) // Imprime una prop del evento, que refiere al elemento target (html)
        button.removeEventListener("click", handlerClick) // Remueve la escucha del evento
    }

// Función manejadora del evento, que invoca a otras dos funciones
    const handlerClick = (event) => {
        saludar("Pepito")
        test(event)
    }

// Añadimos un evento de escucha tipo (click) al boton, y lo vinculamos con la función (handlerClick)
    button.addEventListener("click", handlerClick);`
                    }
                </CodeBox>

                <h4>Flujo de eventos: Bubbling (Defecto) - Capture (Inverso) & preventDefault & stopPropagation</h4> 
                <p>Video-tutorial: <a href="https://youtu.be/xOinGb2MZSk?t=7389" target="_blank"> https://youtu.be/xOinGb2MZSk?t=7389 </a></p> 
                
                <p>Refiere al flujo (Al orden) en el que se ejecutan los eventos de los elementos afectados (3er parametro de addEventListener)</p> 
                <CodeBox lang="javascript"> 
                    {
`// En el siguiente ejemplo podemos ver el flujo por defecto (bubbling) afectado en el subcontenedor
    const button = document.getElementById("accionar"); 
    const contenedor = document.getElementById("contenedor");
    const subContenedor = document.getElementById("subContenedor");

    contenedor.addEventListener("click",(e) => alert("Soy el Contenedor"));
    // Para cambiar el flujo por defecto, se le debe pasar como 3 parametro (true)
    subContenedor.addEventListener("click",(e) => alert("Soy el Sub-contenedor"), true); 
    button.addEventListener("click",(e) => {
        alert("Soy el Boton")
        // e.stopPropagation() // - Detiene la propagación del evento
    });

// En este otro ejemplo, goGoogle = etiqueta <a href="https://google.com">
// Evitamos el redireccionamiento con el metodo preventDefault, aplicable a cualquier evento
    const goGoogle = document.getElementById("prevDefault"); 
    prevDefault.addEventListener("click",(e) => {
        alert("Deteniendo el comportamiento default")
        e.preventDefault()
    });`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="mouse" topic="Eventos del mouse" ytUrl="https://youtu.be/xOinGb2MZSk?t=7811">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`"click" // Ocurre con un click izquierdo sobre el elemento.
"dblclick" // Ocurre con dos clicks izquierdos sobre el elemento (en menos 500ms).
"mouseover" // Ocurre cada vez que el puntero entra al elemento o a cualquiera de sus hijos.
"mouseout" // Ocurre cada vez que el puntero sale del elemento, (por fuera o entrando a sus hijos).
"contextmenu" // Ocurre cuando se da click derecho sobre el elemento.
"mouseenter" // (igual que mouseover) Ocurre cada vez que el puntero entra al elemento.
"mouseleave" // (igual que mouseout) Ocurre cada vez que el puntero sale del elemento.
"mousemove" // Ocurre de forma continua (mientras el puntero se encuentre dentro del elemento, y en movimiento)
"mouseup" // Ocurre cuando un usuario suelta un botón del mouse (cualquiera) sobre un elemento.
"mousedown" // Ocurre cuando un usuario apreta un botón del mouse (cualquiera) sobre un elemento.
"scroll" // Ocurre cuando se deplaza la barra de scroll`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="teclado" topic="Eventos del teclado" ytUrl="https://youtu.be/xOinGb2MZSk?t=8356" docUrl="https://www.toptal.com/developers/keycode">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`"keyup" // Ocurre cuando se suelta una tecla
window.addEventListener("keyup", (event) =>{
    // console.log(event.key) // Devuelve el nombre de la tecla
    if (event.key === "Escape") {
        console.log(" Presionaste Escape (Esc) !!!")
    }
})`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="interfaz" topic="Eventos de interfaz" ytUrl="https://youtu.be/xOinGb2MZSk?t=8618">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`"load" // Ocurre cuando es cargado el sitio por completo (incluyendo scripts + estilos css + dom)
window.addEventListener("load", () =>{
    console.log("saludos")
})       
"DOMContentLoaded" // Ocurre cuando es cargado el DOM (sin incluir scripts & estilos css)
window.addEventListener("DOMContentLoaded", () =>{
    console.log("saludos")
})       
"error" // Ocurre cuando sucede un error durante la carga de un archivo multimedia.
"change" // Ocurre cuando un cuadro de txt (input, text area) pierde el foco y su contenido ha variado. También cuando cambia el valor de un select
"submit" // Se produce cuando se pulsa un boton de tipo "submit" vinculado a un formulario.
const form = document.querySelector("#formulario")
const enviarFormulario = (e) => {
    e.preventDefault
    // console.log(e)
}
form.addEventListener('submit', enviarFormulario)
"focus" // Se produce cuando el elemento obtiene foco
"blur" // Se produce cuando el elemento pierde el foco

// "beforeunload" // Ocurre milesimas de segundos antes de irse del sitio
// "unload" // Ocurre una vez que ya nos fuimos del sitio
// "resize" // Ocurre cuando se cambia el tamaño de la vista (del navegador)
// "select" // Ocurre despues de que el usuario selecciona algun texto (Solo en un input o un textarea)`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Events