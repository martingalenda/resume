import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const IntroduccionJS = () => {

    return (
        <Information>

            <TopicContainer topic="Javascript - Introducción" ytUrl="https://www.youtube.com/watch?v=C5FXZ2ki13k">
            <p>JavaScript es un lenguaje de programación de alto nivel, multiplataforma, y se encuentra en el top 3 en cuanto a los lenguajes más utilizados del mundo.</p> <br/> 
            <h4>Características del lenguaje:</h4> 
                <ul>                
                    <li>JS en el Front-end se ejecuta en el cliente, es decir, en el navegador web del usuario.</li> 
                    <li>JS en el Back-end se ejecuta en el servidor, utilizando Node.js.</li> 
                    <li>Es un lenguaje interpretado (no requiere un proceso de compilación antes de ser ejecutado).</li> 
                    <li>Es multi-paradigma (se puede utilizar tanto con POO, como con prog funcional, etc).</li> 
                    <li>El flujo de ejecución es lineal/secuencial, a no ser que se utilicen mecanismos asíncronos para manipular el flujo.</li> 
                    <li>Imperativo (sentencias paso a paso, solo puede ejecutar una tarea a la vez, ya que posee un solo hilo de ejecuciòn) - <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop" target="_blank">Event Loop</a>.</li> 
                    <li>Basado en prototipos (tras bambalinas, todo es un objeto en javascript). Javascript usa los prototipos para trabajar la herencia y el encapsulamiento.</li> 
                    <li>Débilmente tipado. Es decir que no es estricto en su sintaxis a la hora de declarar los tipos de datos.</li> 
                    <li>Tipado dinámico: Es decir, el tipo de las variables se determinan en tiempo de ejecuciòn (en lugar de hacerlo durante la compilación).</li> 
                    <li>Es un lenguaje orientado a eventos, lo que signficia que es capaz de responder a eventos del usuario, entre otros.</li> 
                    <li>Es un lenguaje que interactua con otros lenguajes, como ser: HTML, CSS, JSON, entre otros muchos más.</li> 
                </ul> 
            <br/> 
            <h4>Ventajas del lenguaje:</h4> 
                <ul>                
                    <li>Es multiplataforma. No solo se usa en desarrollo web, sino también en otras áreas como: aplicaciones de escritorio, juegos, aplicaciones móviles, etc.</li> 
                    <li>Isomorfico. En la actualidad, es el único lenguaje capaz de ejecutarse en las 3 capas de desarrollo (front, back, y persistencia de datos).</li> 
                    <li>Es un lenguaje de código abierto, lo que significa que cualquiera puede contribuir al desarrollo y mejorar el lenguaje.</li> 
                    <li>Es uno de los lenguajes más populares del mundo, por lo que posee una inmensa comunidad detrás.</li> 
                    <li>Posee una estructura sencilla que lo vuelve más facil de aprender, e implementar.</li> 
                </ul> 
            </TopicContainer>
        </Information>
    )
}

export default IntroduccionJS